// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },

//     role: {
//       type: String,
//       enum: ["user", "gbm", "ecm", "admin"], // 3 types of users
//       default: "user",
//     },
//   },
//   { timestamps: true }
// );

// export const User =
//   mongoose.models.User || mongoose.model("User", UserSchema);


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
      enum: ["user", "gbm", "ecm", "admin"], 
      default: "user",
    },
  },
  { timestamps: true }
);

// FIXED: delete old compiled model (hot reload issue)
mongoose.models = {};

export const User = mongoose.model("User", UserSchema);
