import mongoose from "mongoose";
const mongodbURI = "mongodb+srv://sundarshyam27241_db_user:7yIJerJ7jW2Qd99o@cluster0.5j0siyw.mongodb.net/sampleDB?appName=Cluster0";

const connectDB = async (uri) => {
    try {
        const connectionString = uri || mongodbURI;
        const conn = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
};

export default connectDB;