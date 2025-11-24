import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/db";
import { User } from "../../../models/User";
import { decrypt } from "../../../lib/session";


export async function GET(req) {
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

    await connectToDB();

    const users = await User.find({}, "name email role");

    return NextResponse.json({ users });

  } catch (error) {
    console.error("LIST USERS ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
