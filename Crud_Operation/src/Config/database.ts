import mongoose from "mongoose";
// import { config } from "dotenv";

// config({ path: "./Config/config.env" });

export const connectDB = (): void => {

    mongoose.connect("mongodb://127.0.0.1:27017/typeScript")

    const connectDB = mongoose.connection;


    connectDB.on("connected", () => {
        console.log("Connected to MongoDB");
    });

    connectDB.on("error", (error) => {
        console.error("MongoDB connection error:", error);
    });

};

// export default connectDB;