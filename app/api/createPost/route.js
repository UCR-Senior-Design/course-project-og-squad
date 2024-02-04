// import { NextResponse } from "next/server";

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export async function POST(req) {
//     try {
//       // Connect the client to the server (optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
  
//       const database = client.db("Snapchef"); // Replace with your database name
//       const collection = database.collection("Posts"); // Replace with your collection name
  
//       // Extract recipe data from the request body
//       const { recipeName, timeToComplete, calories, description, imageURL } = req.body;
  
//       // Validate the data if needed
  
//       // Create a new document for the recipe
//       const newRecipe = {
//         recipeName,
//         timeToComplete,
//         calories,
//         description,
//         imageURL,
//       };
  
//       // Insert the new document into the collection
//       const result = await collection.insertOne(newRecipe);
  
//       // Check if the insertion was successful
//       if (result.insertedCount === 1) {
//         return NextResponse.json({ message: 'Recipe created successfully' });
//       } else {
//         throw new Error('Failed to create recipe');
//       }
//     } catch (error) {
//       console.error("MongoDB error:", error);
//       return NextResponse.error(`Internal Server Error: ${error.message}`);
//     } finally {
//       await client.close(); // Close the MongoDB connection
//     }
//   }

import User from "@/models/user";
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";

//authentication tingz
export async function POST(req) {
    try {
        const {postTitle, preparationTime, calories, description} = await req.json();

        console.log("Recipe Title: ", postTitle);
        console.log("Recipe Title: ", preparationTime);
        console.log("Recipe Title: ", calories);
        console.log("Recipe Title: ", description);


        return NextResponse.json({message: "New Post Added to DB."}, {status: 201});
    } catch (error) {
      return NextResponse.json(
        {message: "An error has occured while adding new post to DB."},
        {status: 500 }
      );
    }
  }