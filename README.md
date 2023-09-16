**This project is a RESTful API for a blogging platform. It allows for the creation, reading, updating, and deletion of blog posts. Additionally, it provides features for user registration and authentication, as well as adding comments to posts.**

<div align="center">
<img src="https://i.ibb.co/gJN1st9/Lucca-Rendall.png" alt="Lucca-Rendall">  
</div>

## Features

- Blog post management:
  - Create a new post
  - Read details of a specific post
  - Update an existing post
  - Delete a post
- User registration and authentication:
  - Register a new user
  - Authenticate an existing user
- Add comments to blog posts
- Post listing:
  - Get a list of all posts
  - Filter posts by author
  - Sort posts by date
- Post search:
  - Search posts by title or content
- Proper error handling and data validation

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- Nodemon
- Docker

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js
- Docker

## Installation

Follow the steps below to set up and run the application:

1. Clone the repository:

```
git clone https://github.com/luccarendall/blogs-api.git
```

2. Navigate to the project directory:

```
cd blogs-api
```

3. Install dependencies:

```
npm install
```

4. Configure environment variables:

- Rename the .env.example file to .env.
- Edit the .env file and set appropriate values for the environment variables.

5. Start the server:

```
npm start
```

The application is now running and can be accessed at the following endpoint: http://localhost:3000.

The API has the following endpoints:

GET /posts: Get a list of all blog posts.
GET /posts/:id: Get details of a specific post.
POST /posts: Create a new post.
PUT /posts/:id: Update an existing post.
DELETE /posts/:id: Delete a post.
POST /users/register: Register a new user.
POST /users/login: Authenticate a user.
POST /posts/:id/comments: Add a comment to a post.
GET /users/:id/posts: Get all posts from a specific user.
GET /search/posts: Search posts by title or content.

Contributions
Contributions are welcome! To contribute to the project, follow the steps below:

1. Fork the repository.
2. Create a branch for your feature:

```
git checkout -b my-feature
```

3. Make necessary changes and commit:

```
git commit -m "My contribution"
```

4. Push to the remote repository:

```
git push origin my-feature
```
