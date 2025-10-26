import mongoose from "mongoose";

export const verifyRecipeById = (req, res, next) => {
    const { id } = req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            status: "error",    
            message: "Invalid Recipe Id",
        });
    }   
    next();
};


