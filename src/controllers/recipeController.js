import Recipe from "../models/Recipe.js";
import mongoose from "mongoose";



export const createRecipe = async (req, res) => {
    try {
        const { title, description, ingredients, instructions, cookingTime, difficulty } = req.body;


        if (!title || !description || !ingredients || !instructions || !cookingTime || !difficulty) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required",
            });
        }

        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            cookingTime,
            difficulty,
        });
        await newRecipe.save();
        res.status(201).json({
            status: "success",
            message: "Recipe created successfully",
            data: newRecipe,
        });
    } catch (error) {
        
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({
                status: "error",
                message: `Recipe with this ${field} already exists`,
                field: field
            });
        }
        
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                status: "error",
                message: error.message,
            });
        }
        
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
}


export const getAllRecipe = async (req, res) => {
    try {
        const recipes = await Recipe.find().select('-__v');
        res.status(200).json({
            status: "success",
            message: "Recipes fetched successfully",
            data: recipes,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};



export const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid recipe ID",
            });
        }

        const recipe = await Recipe.findById(id).select("-__v");

        if (!recipe) {
            return res.status(404).json({
                status: "error",
                message: "Recipe not found",
            });
        }
        
        res.status(200).json({
            status: "success",
            message: "Recipe fetched successfully",
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};



export const updateRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid recipe ID",
            });
        }

        if (Object.keys(newData).length === 0) {
            return res.status(400).json({
                status: "error",
                message: "No data provided for update",
            });
        }

        const recipe = await Recipe.findByIdAndUpdate(id, newData, { new: true, runValidators: true });

        if (!recipe) {
            return res.status(404).json({
                status: "error",
                message: "Recipe not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Recipe updated successfully",
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};


export const deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid recipe ID",
            });
        }

        const recipe = await Recipe.findByIdAndDelete(id);

        if (!recipe) {
            return res.status(404).json({
                status: "error",
                message: "Recipe not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Recipe deleted successfully",
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
}

