const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    getThoughtById(req,res) {
        Thought.findOne({ _id: req.params.id })
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: "No thought found with this ID" })
                    : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    createThought(req,res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "Thought created but no user found with this ID"})
                    : res.json("Thought successfully created"))
            .catch((err) => {
                console.error(err);
                res.status(500).json(err)});
    },
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought found with this ID "})
                : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought found with this ID" })
                : User.findOneAndUpdate(
                    { thoughts: req.params.id },
                    { $pull: { thoughts: req.params.id } },
                    { new: true }
                ))
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "Thought deleted but no user found with this ID" })
                    : res.json({ message: "Thought successfully deleted" }))
            .catch((err) => res.status(500).json(err));
    },
};