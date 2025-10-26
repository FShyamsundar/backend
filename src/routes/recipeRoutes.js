import { Router } from "express";
import { createRecipe, deleteRecipeById, getAllRecipe, getRecipeById, updateRecipeById } from "../controllers/recipeController.js";
import { verifyRecipeById } from "../middlewares/recipeMiddlewares.js";

const recipeRouter = Router();  

recipeRouter.post("/", createRecipe); 
recipeRouter.get("/" , getAllRecipe); 
recipeRouter.get("/:id",verifyRecipeById,getRecipeById); 
recipeRouter.put("/:id",verifyRecipeById,updateRecipeById);
recipeRouter.delete("/:id",verifyRecipeById,deleteRecipeById);

export default recipeRouter;