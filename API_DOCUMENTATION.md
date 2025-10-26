# Recipe API Documentation

## Base URL
```
http://localhost:8080
```

## Headers
For POST and PUT requests:
```
Content-Type: application/json
```

---

## 1. Get All Recipes

**Endpoint:** `GET /recipes`

**Description:** Retrieve all recipes from the database.

### Request
```http
GET http://localhost:8080/recipes
```

### Success Response (200)
```json
{
  "status": "success",
  "message": "Recipes fetched successfully",
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "title": "Chocolate Chip Cookies",
      "description": "Delicious homemade cookies",
      "ingredients": [
        "2 cups flour",
        "1 cup sugar",
        "1/2 cup butter"
      ],
      "instructions": [
        "Mix ingredients",
        "Bake for 12 minutes"
      ],
      "cookingTime": 25,
      "difficulty": "easy",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  ]
}
```

### Error Response (500)
```json
{
  "status": "error",
  "message": "Database connection error"
}
```

---

## 2. Create Recipe

**Endpoint:** `POST /recipes`

**Description:** Create a new recipe.

### Request
```http
POST http://localhost:8080/recipes
Content-Type: application/json

{
  "title": "Chocolate Chip Cookies",
  "description": "Delicious homemade chocolate chip cookies that are crispy on the outside and chewy on the inside",
  "ingredients": [
    "2 cups all-purpose flour",
    "1 tsp baking soda",
    "1 tsp salt",
    "1 cup butter, softened",
    "3/4 cup granulated sugar",
    "3/4 cup brown sugar",
    "2 large eggs",
    "2 tsp vanilla extract",
    "2 cups chocolate chips"
  ],
  "instructions": [
    "Preheat oven to 375°F",
    "Mix flour, baking soda, and salt in a bowl",
    "Cream butter and sugars until fluffy",
    "Beat in eggs and vanilla",
    "Gradually add flour mixture",
    "Stir in chocolate chips",
    "Drop spoonfuls on baking sheet",
    "Bake for 9-11 minutes"
  ],
  "cookingTime": 25,
  "difficulty": "easy"
}
```

### Success Response (201)
```json
{
  "status": "success",
  "message": "Recipe created successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Chocolate Chip Cookies",
    "description": "Delicious homemade chocolate chip cookies that are crispy on the outside and chewy on the inside",
    "ingredients": [
      "2 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    "instructions": [
      "Preheat oven to 375°F",
      "Mix flour, baking soda, and salt in a bowl",
      "Cream butter and sugars until fluffy",
      "Beat in eggs and vanilla",
      "Gradually add flour mixture",
      "Stir in chocolate chips",
      "Drop spoonfuls on baking sheet",
      "Bake for 9-11 minutes"
    ],
    "cookingTime": 25,
    "difficulty": "easy",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

### Error Response (400)
```json
{
  "status": "error",
  "message": "All fields are required"
}
```

### Validation Errors (400)
```json
{
  "status": "error",
  "message": "Recipe validation failed: title: Path `title` is required."
}
```

---

## 3. Get Recipe by ID

**Endpoint:** `GET /recipes/:id`

**Description:** Retrieve a specific recipe by its ID.

### Request
```http
GET http://localhost:8080/recipes/64f8a1b2c3d4e5f6a7b8c9d0
```

### Success Response (200)
```json
{
  "status": "success",
  "message": "Recipe fetched successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Chocolate Chip Cookies",
    "description": "Delicious homemade cookies",
    "ingredients": [
      "2 cups flour",
      "1 cup sugar",
      "1/2 cup butter"
    ],
    "instructions": [
      "Mix ingredients",
      "Bake for 12 minutes"
    ],
    "cookingTime": 25,
    "difficulty": "easy",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

### Error Response (400)
```json
{
  "status": "error",
  "message": "Invalid recipe ID"
}
```

### Error Response (404)
```json
{
  "status": "error",
  "message": "Recipe not found"
}
```

---

## 4. Update Recipe

**Endpoint:** `PUT /recipes/:id`

**Description:** Update an existing recipe by ID.

### Request
```http
PUT http://localhost:8080/recipes/64f8a1b2c3d4e5f6a7b8c9d0
Content-Type: application/json

{
  "title": "Updated Chocolate Chip Cookies",
  "cookingTime": 30,
  "difficulty": "medium"
}
```

### Success Response (200)
```json
{
  "status": "success",
  "message": "Recipe updated successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Updated Chocolate Chip Cookies",
    "description": "Delicious homemade cookies",
    "ingredients": [
      "2 cups flour",
      "1 cup sugar",
      "1/2 cup butter"
    ],
    "instructions": [
      "Mix ingredients",
      "Bake for 12 minutes"
    ],
    "cookingTime": 30,
    "difficulty": "medium",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T11:45:00.000Z"
  }
}
```

### Error Response (400)
```json
{
  "status": "error",
  "message": "Invalid recipe ID"
}
```

### Error Response (400)
```json
{
  "status": "error",
  "message": "No data provided for update"
}
```

### Error Response (404)
```json
{
  "status": "error",
  "message": "Recipe not found"
}
```

---

## 5. Delete Recipe

**Endpoint:** `DELETE /recipes/:id`

**Description:** Delete a recipe by ID.

### Request
```http
DELETE http://localhost:8080/recipes/64f8a1b2c3d4e5f6a7b8c9d0
```

### Success Response (200)
```json
{
  "status": "success",
  "message": "Recipe deleted successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Chocolate Chip Cookies",
    "description": "Delicious homemade cookies",
    "ingredients": [
      "2 cups flour",
      "1 cup sugar",
      "1/2 cup butter"
    ],
    "instructions": [
      "Mix ingredients",
      "Bake for 12 minutes"
    ],
    "cookingTime": 25,
    "difficulty": "easy",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

### Error Response (400)
```json
{
  "status": "error",
  "message": "Invalid recipe ID"
}
```

### Error Response (404)
```json
{
  "status": "error",
  "message": "Recipe not found"
}
```

---

## Sample Test Data

### Recipe 1: Chocolate Chip Cookies
```json
{
  "title": "Chocolate Chip Cookies",
  "description": "Classic homemade chocolate chip cookies",
  "ingredients": [
    "2 cups all-purpose flour",
    "1 tsp baking soda",
    "1 tsp salt",
    "1 cup butter, softened",
    "3/4 cup granulated sugar",
    "3/4 cup brown sugar",
    "2 large eggs",
    "2 tsp vanilla extract",
    "2 cups chocolate chips"
  ],
  "instructions": [
    "Preheat oven to 375°F",
    "Mix dry ingredients",
    "Cream butter and sugars",
    "Add eggs and vanilla",
    "Combine wet and dry ingredients",
    "Fold in chocolate chips",
    "Bake for 9-11 minutes"
  ],
  "cookingTime": 25,
  "difficulty": "easy"
}
```

### Recipe 2: Spaghetti Carbonara
```json
{
  "title": "Spaghetti Carbonara",
  "description": "Traditional Italian pasta dish with eggs, cheese, and pancetta",
  "ingredients": [
    "400g spaghetti",
    "200g pancetta",
    "4 large eggs",
    "100g Pecorino Romano cheese",
    "Black pepper",
    "Salt"
  ],
  "instructions": [
    "Cook spaghetti in salted water",
    "Fry pancetta until crispy",
    "Whisk eggs with cheese and pepper",
    "Combine hot pasta with pancetta",
    "Add egg mixture off heat",
    "Toss quickly to create creamy sauce"
  ],
  "cookingTime": 20,
  "difficulty": "medium"
}
```

## Error Codes Summary

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error, invalid ID, missing data) |
| 404 | Not Found |
| 500 | Internal Server Error |