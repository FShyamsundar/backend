import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {

    const mongodbURI =`mongodb+srv://${process.env.DB_USER}:${ process.env.DB_PASSWORD }@cluster0.5j0siyw.mongodb.net/${process.env.DB_NAME }?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(mongodbURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;