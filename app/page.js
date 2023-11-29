import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Post from "@/components/post";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Post post={{ name: "Example", price: 10, condition: "Good", phone: "123-456-7890" }} />
      <Footer />
    </main>
  );
}
