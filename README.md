# Social Network API

## Description

The Social Network API is a backend solution for a social networking web application that allows users to share thoughts, react to friends' thoughts, and manage a list of friends. The API is built using Express.js for routing, a MongoDB database for data storage, and Mongoose ODM for managing the database interactions. This application provides a robust set of endpoints for managing user data, thoughts, reactions, and friendships.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Instructions](#instructions)
- [Required Packages](#required-packages)
- [Installation](#installation)

## Demo

- **View users and thoughts**: [GET routes](./assets/GET-routes.mp4)
- **Add and delete users and thoughts**: [POST and DELETE routes](./assets/POST-DELETE-routes.mp4)
- **Add and delete friends**: [POST and DELETE friends routes](./assets/Friends-routes.mp4)

## Instructions

1. Use a tool like Postman or Insomnia to test the API endpoints.
2. The API allows users to create, read, update, and delete users, thoughts, and reactions.
3. Users can add or remove friends, and they can react to others' thoughts via the API.
4. Ensure you have MongoDB running locally or on a cloud platform like MongoDB Atlas to connect with the application.

## Required Packages

- **Express.js**: For handling routing.
- **Mongoose**: As an ODM for MongoDB.
- **MongoDB**: For database management.
- **Day.js** (optional): For formatting timestamps.
- **dotenv**: For environment variable management.
  
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/crob127/Social-Network-API-18.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Social-Network-API-18
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up your `.env` file with your MongoDB connection string:
    ```env
    MONGODB_URI=mongodb://localhost:27017/socialnetwork
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Use a tool like Postman or Insomnia to test the API routes. Available routes include user creation, thought creation, adding/removing friends, reacting to thoughts, and more.

7. Explore the routes in the following categories:
    - **User routes**: `/api/users`
    - **Thought routes**: `/api/thoughts`
    - **Friend routes**: `/api/users/:userId/friends`
    - **Reaction routes**: `/api/thoughts/:thoughtId/reactions`

Make sure to review and link the demo videos in the placeholders above!