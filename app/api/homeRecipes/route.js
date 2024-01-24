import { NextResponse } from "next/server";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const database = client.db("Snapchef"); // Replace with your database name
    const collection = database.collection("Posts"); // Replace with your collection name

    //query to get all documents from the collection
    const query = {};

    // Fetch the documents
    const cursor = collection.find(query);

    // Convert cursor to array
    const documents = await cursor.toArray();

    return NextResponse.json({ documents: documents });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.error(`Internal Server Error: ${error.message}`);
  } finally {
    await client.close(); // Close the MongoDB connection
  }
}
