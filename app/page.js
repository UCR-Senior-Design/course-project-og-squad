import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Post from "@/components/post";


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser:testingDatabase@jeralsonep.rabqcz4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db('Snapchef'); // Replace with your database name
      const collection = database.collection('Posts'); // Replace with your collection name

    // Query to get all documents from the collection
    const query = {};

    // Fetch the documents
    const cursor = collection.find(query);

    // Convert cursor to array
    const documents = await cursor.toArray();

    //display on terminal
    console.log('Documents:');
    documents.forEach(doc => {
    console.log(`ID: ${doc._id}, Username: ${doc.userName}, Recipe Name: ${doc.recipeName}, Likes: ${doc.postLikes}`);
    });
    //end of displaying

    return documents;

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


export default function Home() {
  return (
    <main>
      <Navbar />
      <Post post={{ name: "Example", price: 10, condition: "Good", phone: "123-456-7890" }} />
      <Footer />
    </main>
  );
}
