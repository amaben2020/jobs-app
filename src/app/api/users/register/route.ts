import dbConnect from "@/config/dbConfig";
import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export const POST = async (request: NextRequest) => {
  try {
    const { email, name, isAdmin, password } = await request.json();

    const salt = 10;

    const hashedPassword = await bcrypt.hash(String(password), salt);

    const createdUser = await UserModel.create({
      email,
      name,
      isAdmin,
      password: hashedPassword,
    });

    // TODO: notify or redirect to login route

    return NextResponse.json({ message: "Sent", createdUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Bad" });
  }
};
