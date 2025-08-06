# 📚 Library Management API

A RESTful API built with **Express**, **TypeScript**, and **MongoDB** using **Mongoose** for managing a simple Library system.

> 🚀 Developed as part of a backend learning project by [Rahyan Akil](https://github.com/rahyanakil)

---

## 📦 Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **REST API**
- **Mongoose Middleware** (pre/post hooks)
- **Custom Business Logic** & Aggregation
- **Project Structure with MVC Pattern**

---

## 🔧 Features

- 📘 **Books**
  - Add, view, update, delete books
  - Filter by author, genre, availability

- 🔄 **Borrowing System**
  - Borrow a book if available
  - Return a borrowed book
  - Prevent borrowing if already borrowed or unavailable

- 📊 **Borrowing Summary**
  - Aggregated summary of borrow records
  - Total books borrowed per user
  - Date-wise borrowing statistics

---

## 🗂️ Project Structure

src/
├── app/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── utils/
├── config/
├── server.ts
└── app.ts



---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
2. Install Dependencies

npm install
3. Environment Variables
Create a .env file and configure:

ini

PORT=5000
DATABASE_URL=mongodb://localhost:27017/library-db
4. Run in Development

npm run dev
🔄 API Endpoints
📘 Books
Method	Endpoint	Description
GET	/api/books	List all books
POST	/api/books	Add a new book
GET	/api/books/:id	Get a book by ID
PATCH	/api/books/:id	Update book by ID
DELETE	/api/books/:id	Delete book by ID

🔁 Borrowing
Method	Endpoint	Description
POST	/api/borrow	Borrow a book
GET	/api/borrow	Get all borrow records
GET	/api/borrow/summary	Get borrowing summary

🧪 Testing
Use Postman or curl to test endpoints.

Example request:


curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "1984", "author": "George Orwell", "genre": "Dystopian"}'
✅ Assignment Requirements Covered
✅ Schema Validation (Mongoose)

✅ Middleware (pre-save, post-delete)

✅ Business Logic (borrow check, availability)

✅ Aggregation Pipeline (summary stats)

✅ Filtering and Searching

✅ MVC Project Structure

📅 Last Updated
August 6, 2025

🧑‍💻 Author
Rahyan Akil
📧 rahyanakil89@gmail.com
🌐 GitHub



---


