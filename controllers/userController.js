const { User } = require('../models');

module.exports = {
    async getUsers(req,res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getUserById(req,res) {
        User.findOne({ _id:req.params.id })
            .then((user) => 
                !user
                ? res.status(404).json({ message: "No user found with this ID" })
                : res.json(user))
            .catch((err) => {
                console.error(err);
                res.status(500).json(err)
            });
    },
    createUser(req,res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req,res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req,res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req,res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, {new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
};