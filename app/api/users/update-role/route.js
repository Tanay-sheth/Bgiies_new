import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/db";
import { User } from "../../../models/User";
import { decrypt } from "../../../lib/session";

export async function POST(req) {
  try {
    const cookie = req.cookies.get("session")?.value;
    const session = cookie ? await decrypt(cookie) : null;

    // 🔒 Backend admin check
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized - admin access required" },
        { status: 401 }
      );
    }

    const { email, role } = await req.json();

    if (!email || !role) {
      return NextResponse.json(
        { error: "Email and role are required" },
        { status: 400 }
      );
    }

    const validRoles = ["user", "gbm", "ecm", "admin"];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role" },
        { status: 400 }
      );
    }

    await connectToDB();

    const user = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Role updated successfully",
      user,
    });

  } catch (error) {
    console.error("UPDATE ROLE ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
