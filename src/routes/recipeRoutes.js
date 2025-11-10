import { Router } from "express";
import { createRecipe, deleteRecipeById, getAllRecipe, getRecipeById, updateRecipeById } from "../controllers/recipeController.js";

const recipeRouter = Router();  

recipeRouter.post("/", createRecipe); 
recipeRouter.get("/" , getAllRecipe); 
recipeRouter.get("/:id", getRecipeById); 
recipeRouter.put("/:id", updateRecipeById);
recipeRouter.delete("/:id", deleteRecipeById);

export default recipeRouter;