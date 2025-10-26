import mongoose from "mongoose";
const mongodbURI = "mongodb+srv://sundarshyam27241_db_user:7yIJerJ7jW2Qd99o@cluster0.5j0siyw.mongodb.net/sampleDB?appName=Cluster0";

const connectDB = () => {
    mongoose.connect(mongodbURI).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};

export default connectDB;