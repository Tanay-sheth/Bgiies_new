import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env");
}

export async function connectToDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return mongoose.connect(MONGODB_URI);
}
