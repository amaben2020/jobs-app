import dbConnect from "@/config/dbConfig";
import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export const POST = async (request: NextRequest) => {
  try {
    const { email, name, isAdmin, password } = await request.json();

    const salt = 10;

    console.log(password);
    const hashedPassword = await bcrypt.hash(String(password), salt);

    console.log(hashedPassword);

    const createdUser = await UserModel.create({
      email,
      name,
      isAdmin,
      password: hashedPassword,
    });

    // notify or redirect to login route

    return NextResponse.json({ message: "Sent", createdUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Bad" });
  }
};
