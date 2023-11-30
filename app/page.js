import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Post from "@/components/post";
import image from "../assets/pizza.png"
import image2 from "../assets/ramen.png"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Post post={{ name: "Pizza", time: "30 mins", calories: "1000 cals", description: "Pizza description", imageURL: image }} />
      <Post post={{ name: "Miso Ramen", time: "20 mins", calories: "1200 cals", description: "Miso-Ramen description", imageURL: image2 }} />
      <Footer />
    </main>
  );
}
