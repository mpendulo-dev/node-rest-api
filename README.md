# Bookstore REST API

This is a Node.js-based REST API for managing a bookstore's collection of books.

## Features

- CRUD operations for books: Create, Read, Update, and Delete books.
- Uses Express.js for routing and handling HTTP requests.
- Stores data in a MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mpendulo-dev/node-rest-api.git
   cd node-rest-api

   ```

2. Install dependencies

   ```sh
   npm install

   ```

3. Run the API:

   ```sh
   npm start
   ```

The API will start at <http://localhost:3001>

## API Endpoints

**List all books**

- URL: `api/book`
- Method: `GET`
- Response: `JSON array of all books`

**Get a specific book**

- URL: `api/book/:id`
- Method: `GET`
- Response: JSON object of the book with the provided **id**.

**Add a new book**

- URL: `api/book`
- Method: `POST`
- Response: `JSON object representing the new book.`

**Example Requests**:
_Adding a new book_

```http
POST /api/book
Content-Type: application/json

{
  "title": "The terminator",
  "genre": "Action"
}
```

**Update a book**

- URL: `api/book/:id`
- Method: `PUT`
- Response: `JON object with updated book information.`

**Example Requests**:
_Updating book_

```http
PUT /api/book/1
Content-Type: application/json

{
  "title": "The terminator 2",
  "genre": "Action"
}
```

**Delete a book**

- URL: `api/book/:id`
- Method: `DELETE`
- Response: `JSON object indicating success`
