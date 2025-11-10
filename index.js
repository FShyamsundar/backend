import express from 'express';
import connectDB from './src/config/db.js';
import recipeRouter from './src/routes/recipeRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';
import  Dotenv  from 'dotenv';

Dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());

app.get('/', (req, res) => res.send('Recipe API is running'));

app.use('/recipes', recipeRouter);



app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

//server running port url
//http://localhost:8000/