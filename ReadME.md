# 🔐 REST API with Authentication

A secure RESTful API built with Node.js, Express.js, and MongoDB that provides user authentication and complete CRUD operations for post management. The project follows a clean architecture with separate route and controller layers for maintainability and scalability.

## 🚀 Features

* User Registration
* User Login & Authentication
* Secure Password Hashing with bcrypt
* User Logout Functionality
* Full CRUD Operations for Posts
* Request Validation and Error Handling
* Modular Route and Controller Structure
* MongoDB Database Integration
* RESTful API Design Principles

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* bcrypt
* JWT (if used)

## 📂 Project Structure

```text
project-root/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── app.js
├── server.js
└── package.json
```

## 📋 API Endpoints

### Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |
| POST   | /api/auth/logout   | Logout user         |

### Posts

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/posts     | Get all posts   |
| GET    | /api/posts/:id | Get single post |
| POST   | /api/posts     | Create new post |
| PUT    | /api/posts/:id | Update post     |
| DELETE | /api/posts/:id | Delete post     |

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd rest-api-authentication
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## ▶️ Run the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

## 🔒 Security Features

* Password hashing using bcrypt
* Protected routes with authentication middleware
* Request validation
* Error handling middleware
* Environment variable protection

## 🧪 Testing the API

You can test the API using:

* Postman
* Thunder Client
* Insomnia

## 📈 Future Improvements

* Role-Based Access Control (RBAC)
* Refresh Token Authentication
* API Rate Limiting
* Email Verification
* Password Reset Functionality
* Swagger API Documentation

## 💻 Source Code

https://github.com/Abhinandan-srcs/Intro-To-Backend/

## 👨‍💻 Author

**Abhinandan**

GitHub: https://github.com/Abhinandan-srcs


