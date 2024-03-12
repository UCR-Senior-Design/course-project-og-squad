import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import RecipePost from "@/models/post";

export async function POST(req) {
  try {
    const { recipe_name } = await req.json();

    await connectMongoDB();

    const updatedRecipePost = await RecipePost.findOneAndUpdate(
      { recipe_name: recipe_name },
      { $inc: { recipe_likes: 1 } },
      { new: true }
    );

    if (!updatedRecipePost) {
      return NextResponse.json(
        { message: "Post not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Post likes incremented." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while updating post likes." },
      { status: 500 }
    );
  }
}
