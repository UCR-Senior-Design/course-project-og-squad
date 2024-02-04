import User from "@/models/user";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";

//authentication tingz
export async function POST(req) {
    try {
        const {post, password} = await req.json();
        const hashedPass = await bcrypt.hash(password, 10);
        //connect to client server
        await connectMongoDB();
        await User.create({username, password:hashedPass});
  
        return NextResponse.json({message: "User Registered."}, {status: 201});
    } catch (error) {
      return NextResponse.json(
        {message: "An error has occured while registering the user"},
        {status: 500 }
      );
    }
  }