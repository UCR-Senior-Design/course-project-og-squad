import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { user_id } = await req.json();
    const user = await User.findById(user_id);

    const { _id, name, bio, followerCount, followingCount, postCount } = user;

    // Get the post IDs from the user's document
    const postIds = user.posts;

    // Use the post IDs to find the corresponding posts
    const posts = await Post.find({ _id: { $in: postIds } });

    return NextResponse.json({
      username: name,
      bio,
      followerCount,
      followingCount,
      posts, // Return the found posts
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
