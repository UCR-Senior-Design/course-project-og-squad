import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { user_id } = await req.json();
    const user = await User.findById(user_id);
    const { _id, username, bio, followerCount, followingCount, postCount } =
      user;
    return NextResponse.json({
      username,
      bio,
      followerCount,
      followingCount,
      postCount,
      id: _id,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error,
    });
  }
}
