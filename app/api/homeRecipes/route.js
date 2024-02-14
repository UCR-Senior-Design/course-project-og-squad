import { NextResponse } from "next/server";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db("test");
    const collection = database.collection("posts");

    //query to get all documents from recipeposts
    const query = {};
    //retrieve data
    const cursor = collection.find(query);
    const documents = await cursor.toArray();

    return NextResponse.json({ documents: documents });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.error(`Internal Server Error: ${error.message}`);
  } finally {
    await client.close();
  }
}
