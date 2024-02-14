import RecipePost from "@/models/post";
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const {
      user_id,
      recipe_name,
      recipe_time,
      recipe_cals,
      recipe_description,
    } = await req.json(); //add variables when necessary

    await connectMongoDB();
    await RecipePost.create({
      user_id,
      recipe_name,
      recipe_time,
      recipe_cals,
      recipe_description,
    });

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
