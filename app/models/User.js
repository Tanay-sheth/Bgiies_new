import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["A", "B", "C"], // 3 types of users
      default: "C",
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema);
