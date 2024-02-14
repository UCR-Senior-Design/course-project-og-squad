import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();
    const { username } = await req.json();
    const user = await User.findOne({ username }).select("_id");
    console.log("User: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

// Handler to update the user's bio
export async function POST(req) {
  try {
    await connectMongoDB();
    const { user_id, bio } = await req.json(); // Assuming you're passing user_id and bio in the request body
    const user = await User.findByIdAndUpdate(user_id, { bio }, { new: true }); // Update the user's bio and retrieve the updated user document
    console.log("Updated User: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("Failed to update bio"), 500); // Return an error response if there's an error
  }
}

// Modified handler to return user data including bio
export async function GET(req) {
  try {
    await connectMongoDB();
    const { username } = await req.json();
    const user = await User.findOne({ username }).select("_id bio"); // Include bio field in the selected fields
    console.log("User: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("Failed to fetch user data"), 500); // Return an error response if there's an error
  }
}
