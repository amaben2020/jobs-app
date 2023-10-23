import dbConnect from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export const POST = async (request: NextRequest) => {
  console.log(request);
  // get the model

  // add the req body to mongodb

  // notify or redirect to login route

  // hash the password

  return NextResponse.json({ message: "Sent" });
};
