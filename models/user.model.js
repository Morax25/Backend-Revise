import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      // match: [/\s+@\s+\.s+/, "Please Enter a Valid Email Address"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
