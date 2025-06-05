# Kuraz-Backend_API
A full-stack task manager API built with Node.js, Express, MongoDB, and Mongoose. It supports creating, updating, deleting, and fetching tasks using a unique tid. Includes a simple HTML/CSS/JS frontend for interacting with the API in the browser.
# 📝 Task Manager API with Custom `tid` and Frontend

This is a full-featured RESTful Task Management API built with **Express** and **MongoDB**.  
Each task includes a custom `tid` (in addition to the default Mongo `_id`) and supports basic CRUD operations.  
Includes a simple browser-based frontend using HTML, CSS, and JavaScript for quick testing.

---

## 🚀 Features

- Custom `tid` (task ID) field
- Create, Read, Update, Delete tasks
- Task schema includes: `tid`, `title`, `description`, `dueDate`, `priority`, `completed`
- Modular code with separate folders for **models**, **controllers**, **routes**, and **config**
- Simple HTML+JS UI for testing API endpoints directly in the browser

---

## 📁 Folder Structure

task-api/
├── config/ # MongoDB connection file
├── controllers/ # Logic for API routes
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── public/ # Static frontend (HTML, CSS, JS)
├── .env # Environment variables
├── server.js # App entry point
└── README.md # This file




---

## 🔧 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- HTML + CSS + JavaScript (Vanilla)

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-api.git
cd task-api
npm install
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdatabase name or  mondb atlas
