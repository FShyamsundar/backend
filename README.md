# Recipe API

A RESTful API for managing recipes built with Node.js, Express.js, and MongoDB.

## Features

- Create, read, update, and delete recipes
- Input validation and error handling
- MongoDB integration with Mongoose
- Clean JSON responses
- Comprehensive API documentation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/recipe-db
   PORT=8080
   ```
4. Start the server:
   ```bash
   npm start
   # or for development
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/recipes` | Get all recipes |
| POST | `/recipes` | Create a new recipe |
| GET | `/recipes/:id` | Get recipe by ID |
| PUT | `/recipes/:id` | Update recipe by ID |
| DELETE | `/recipes/:id` | Delete recipe by ID |

## Recipe Schema

```json
{
  "title": "String (required, min 3 chars)",
  "description": "String (required)",
  "ingredients": ["Array of strings (required)"],
  "instructions": ["Array of strings (required)"],
  "cookingTime": "Number (required, in minutes)",
  "difficulty": "String (required: 'easy', 'medium', 'hard')",
  "createdAt": "Date (auto-generated)",
  "updatedAt": "Date (auto-generated)"
}
```

## Testing

Use the provided Postman collection or test with curl/HTTP client of your choice.

Base URL: `http://localhost:8080`

## Error Handling

The API returns consistent error responses:

```json
{
  "status": "error",
  "message": "Error description"
}
```

Common HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error