import express from "express";
import connectDB from "./src/config/db.js";
import recipeRouter from "./src/routes/recipeRoutes.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/recipe", recipeRouter);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDB();
});


