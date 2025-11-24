"use server";

import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { connectToDB } from "../lib/db";
import { User } from "../models/User";
import bcrypt from "bcryptjs";



export async function signup(prevState, formData) {
  await connectToDB();

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!name || name.length < 2) errors.name = ["Name is required"];
  if (!email) errors.email = ["Email is required"];
  if (!password || password.length < 8)
    errors.password = ["Password must be at least 8 characters"];

  if (Object.keys(errors).length > 0) return { errors };

  const existing = await User.findOne({ email });
  if (existing) return { errors: { email: ["Email already exists"] } };

  const hashed = await bcrypt.hash(password, 10);

  // Determine role based on email
  let assignedRole = "user";


  const newUser = await User.create({
    name,
    email,
    password: hashed,
    role: assignedRole,
  });

  await createSession({
    userId: newUser._id,
    role: newUser.role,
    email: newUser.email,
  });

  redirect("/");
}


export async function login(prevState, formData) {
  await connectToDB();

  const email = formData.get("email");
  const password = formData.get("password");

  const user = await User.findOne({ email });
  if (!user) return { errors: { email: ["Invalid email or password"] } };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return { errors: { email: ["Invalid email or password"] } };


  await createSession({
    userId: user._id,
    role: user.role,
    email: user.email,
  });

  redirect("/");
}


export async function logout() {
  await deleteSession();
  redirect("/login");
}
