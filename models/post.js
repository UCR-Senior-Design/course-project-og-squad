import mongoose, { Schema, models } from "mongoose";

//this assigns the variable name with its variable type in MongoDB
const postSchema = new Schema(
    {
        user_name: {
            type: String,
            required: true,
        },
        recipe_name: {
            type: String,
            required: true,
        },
        recipe_time: {
            type: Number,
            required: true,
        },
        recipe_cals: {
            type: Number,
            required: true,
        },
        recipe_description: {
            type: String,
            required: true,
        }
    }, 
    {timestamps: true }
);

const RecipePost = models.RecipePost || mongoose.model("RecipePost", postSchema);
export default RecipePost;