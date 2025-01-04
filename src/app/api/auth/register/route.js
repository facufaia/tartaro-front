// src/app/api/auth/register/route.js
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return new NextResponse("Invalid email format", { status: 400 });
    }

    // Validate password strength
    if (password.length < 8) {
      return new NextResponse("Password must be at least 8 characters", {
        status: 400,
      });
    }

    const userWithoutPassword = { email, role };

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Registration error:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: error.status || 500,
    });
  }
}
