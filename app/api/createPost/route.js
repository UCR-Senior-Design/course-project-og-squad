import RecipePost from "@/models/post";
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    const {
      user_id,
      user_name,
      recipe_name,
      recipe_time,
      recipe_cals,
      recipe_description,
    } = await req.json();

    await connectMongoDB();
    const createdRecipePost = await RecipePost.create({
      user_id,
      user_name,
      recipe_name,
      recipe_time,
      recipe_cals,
      recipe_description,
    });

    console.log(createdRecipePost);

    await User.findOneAndUpdate(
      { _id: user_id },
      { $inc: { postCount: 1 }, $push: { posts: createdRecipePost } },
      { new: true }
    );

    return NextResponse.json(
      { message: "New Post Added to DB." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occured while adding new post to DB." },
      { status: 500 }
    );
  }
}
