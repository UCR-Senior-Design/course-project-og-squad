import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { id, updatedBio } = await req.json();
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { bio: updatedBio },
      { new: true }
    );
    const { bio } = updatedUser;
    return NextResponse.json({ bio });
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("Failed to update bio"), 500); // Return an error response if there's an error
  }
}
