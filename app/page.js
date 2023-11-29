import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Post from "@/components/post";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Post post={{ name: "Zeyt and Zaatar", time: "5 min", cals: 69, likes: 420 }} />
      <Footer />
    </main>
  );
}
