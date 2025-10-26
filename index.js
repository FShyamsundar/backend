import express from "express";
import connectDB from "./src/config/db.js";
import recipeRouter from "./src/routes/recipeRoutes.js";

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS for deployment
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Root route - THIS FIXES THE 404 ERROR
app.get('/', (req, res) => {
  res.json({ 
    status: 'success', 
    message: 'Recipe API is running!',
    endpoints: {
      'GET /recipes': 'Get all recipes',
      'POST /recipes': 'Create a recipe',
      'GET /recipes/:id': 'Get recipe by ID',
      'PUT /recipes/:id': 'Update recipe by ID',
      'DELETE /recipes/:id': 'Delete recipe by ID'
    }
  });
});

// API Routes
app.use("/recipes", recipeRouter);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`
  });
});

// Connect to database first, then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});


