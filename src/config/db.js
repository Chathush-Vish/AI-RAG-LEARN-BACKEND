import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
   const mongodbURI = process.env.MONGODB_URI;
   try {
      await mongoose.connect(mongodbURI);
      console.log("Database connected");
   } catch (error) {
      console.log("Data base not connected");
      console.log(error);
   }
};

export default connectDB;
