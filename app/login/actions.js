"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { connectToDB } from "../lib/db";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

// const testUser = {
//   id: "1",
//   email: "testuser@bits.com",
//   password: "12345678",
// };

// const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }).trim(),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters" })
//     .trim(),
// });

export async function signup(prevState, formData) {
  await connectToDB();

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!name || name.length < 2) {
    errors.name = ["Name is required"];
  }

  if (!email) {
    errors.email = ["Email is required"];
  }

  if (!password || password.length < 8) {
    errors.password = ["Password must be at least 8 characters"];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return { errors: { email: ["Email already exists"] } };
  }

  const hashed = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashed,
    role: "C", // default
  });

  await createSession({ userId: newUser._id, role: newUser.role, email:newUser.email });

  redirect("/");
}


export async function login(prevState, formData) {
  await connectToDB();

  const email = formData.get("email");
  const password = formData.get("password");

  const user = await User.findOne({ email });

  if (!user) {
    return { errors: { email: ["Invalid email or password"] } };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { errors: { email: ["Invalid email or password"] } };
  }

  await createSession({ userId: user._id, role: user.role, email:user.email });

  redirect("/");
}


export async function logout() {
  await deleteSession();
  redirect("/login");
}