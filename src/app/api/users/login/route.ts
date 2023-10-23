import dbConnect from "@/config/dbConfig";
import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
dbConnect();
export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // grab email and password from client
    const { email, password } = await request.json();

    // find the user with email
    const createdUser = await UserModel.findOne({
      email,
    });

    // check the pwd
    const decodedPassword = await bcrypt.compare(
      String(password),
      createdUser.password,
    );

    if (decodedPassword && email === createdUser.email) {
      // jwt to create a token

      // TODO: notify or redirect to login route

      const token = jwt.sign(
        {
          id: createdUser._id,
          email: email,
        },
        process.env.ORU_SECRET_KEY!,
      );

      const response = NextResponse.json(
        { message: "Login successful" },
        { status: 200 },
      );

      // response.cookies.set({
      //   name: "token",
      //   value: token,
      //   httpOnly: true,
      //   maxAge: 60 * 60 * 1000 * 24,
      // });

      response.cookies.set("token", token);

      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Bad" });
  }
};
