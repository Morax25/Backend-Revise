import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please Define the MONGODB_URI environment variable inside .env.<production/development>.local"
  );
}

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Database Connection Failed", error);
    process.exit(1);
  }
};

export default dbConnect;
