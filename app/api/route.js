

// remove this file???

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

//REMOVED 12/13/2023
// export async function GET() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });

//     const database = client.db("Snapchef"); // Replace with your database name
//     const collection = database.collection("Posts"); // Replace with your collection name

//     //query to get all documents from the collection
//     const query = {};

//     // Fetch the documents
//     const cursor = collection.find(query);

//     // Convert cursor to array
//     const documents = await cursor.toArray();

//     return NextResponse.json({ documents: documents });
//   } catch (error) {
//     console.error("MongoDB error:", error);
//     return NextResponse.error(`Internal Server Error: ${error.message}`);
//   } finally {
//     await client.close(); // Close the MongoDB connection
//   }
// }

//authentication tingz
// export async function POST(req) {
//   try {
//       const {username, password} = await req.json();
//       const hashedPass = await bcrypt.hash(password, 10);
//       //connect to client server
//       await connectMongoDB();
//       await User.create({username, password:hashedPass});

//       return NextResponse.json({message: "User Registered."}, {status: 201});
//   } catch (error) {
//     return NextResponse.json(
//       {message: "An error has occured while registering the user"},
//       {status: 500 }
//     );
//   }
// }