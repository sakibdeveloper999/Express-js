# Express.js App — Project Documentation

## 📘 Overview
This project is a simple **Express.js** web server built with **Node.js**. It demonstrates how to create a basic backend that listens for HTTP requests and sends responses.

**Main file:** `server.js`  
**Framework:** Express.js  
**Language:** JavaScript (ES Modules)  
**Created on:** October 19, 2025

---

## 🧩 What is Express.js?
**Express.js** is a minimal and flexible Node.js web framework that simplifies building web servers and APIs.  
It helps developers handle routes, requests, and responses easily.

---

## ⚙️ Project Structure
```
project-folder/
│
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact dependency versions
├── server.js              # Main Express app file
└── README.md              # (You can place this documentation here)
```

---

## 🪜 How to Run the Project

### 1. Install Node.js
Make sure Node.js (version 18 or higher) is installed.  
Check your version with:
```bash
node -v
```

### 2. Install Dependencies
Run this command inside the project folder:
```bash
npm install
```

### 3. Start the Server
Start the app using `nodemon` (auto reloads on changes):
```bash
npm start
```
Or start manually with Node:
```bash
node server.js
```

### 4. Test the App
Visit this link in your browser:  
👉 [http://localhost:3000](http://localhost:3000)

You should see:
```
HELLO EXPRESS JS
```

---

## 🧠 Understanding `server.js`
```js
import express from "express";

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("HELLO EXPRESS JS");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
```

### Breakdown:
- `import express` → loads the Express module.
- `express()` → creates the web app instance.
- `app.get()` → defines a route for GET `/` requests.
- `res.send()` → sends a response message.
- `app.listen()` → starts the server on port 3000.

---

## 🧰 Useful Commands
| Command | Description |
|----------|--------------|
| `npm install` | Installs dependencies |
| `npm start` | Starts the app using `nodemon` |
| `node server.js` | Runs the app manually |
| `PORT=4000 npm start` | Runs on custom port (Linux/Mac) |
| `set PORT=4000 && npm start` | Runs on custom port (Windows) |

---

## 🧩 Next Steps / Improvements
- Add more routes (e.g., `/users`, `/products`)
- Add middleware for logging and error handling
- Use environment variables with `.env`
- Connect to a database (MongoDB, MySQL, etc.)
- Deploy to a hosting platform (Render, Vercel, or Railway)

---

## 📄 License
You are free to modify and use this project for learning or personal purposes.
