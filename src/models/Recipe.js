import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
    cookingTime: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard'],
    },

},{
    timestamps : true,
    
});

const Recipe = mongoose.model('RecipeNew',RecipeSchema);
export default Recipe;