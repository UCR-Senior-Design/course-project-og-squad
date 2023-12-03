import Post from "@/components/post";
import image from "../assets/pizza.png";
import image2 from "../assets/ramen.png";

export default function Home() {
  return (
    <main>
      <div className="m-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        <Post
          post={{
            name: "Pizza",
            time: "30 mins",
            calories: "1000 cals",
            description: "Pizza description",
            imageURL: image,
          }}
        />
        <Post
          post={{
            name: "Miso Ramen",
            time: "20 mins",
            calories: "1200 cals",
            description: "Miso-Ramen description",
            imageURL: image2,
          }}
        />
        <Post
          post={{
            name: "Pizza",
            time: "30 mins",
            calories: "1000 cals",
            description: "Pizza description",
            imageURL: image,
          }}
        />
        <Post
          post={{
            name: "Miso Ramen",
            time: "20 mins",
            calories: "1200 cals",
            description: "Miso-Ramen description",
            imageURL: image2,
          }}
        />
        <Post
          post={{
            name: "Pizza",
            time: "30 mins",
            calories: "1000 cals",
            description: "Pizza description",
            imageURL: image,
          }}
        />
        <Post
          post={{
            name: "Miso Ramen",
            time: "20 mins",
            calories: "1200 cals",
            description: "Miso-Ramen description",
            imageURL: image2,
          }}
        />
        <Post
          post={{
            name: "Pizza",
            time: "30 mins",
            calories: "1000 cals",
            description: "Pizza description",
            imageURL: image,
          }}
        />
        <Post
          post={{
            name: "Miso Ramen",
            time: "20 mins",
            calories: "1200 cals",
            description: "Miso-Ramen description",
            imageURL: image2,
          }}
        />
        <Post
          post={{
            name: "Miso Ramen",
            time: "20 mins",
            calories: "1200 cals",
            description: "Miso-Ramen description",
            imageURL: image2,
          }}
        />
      </div>
    </main>
  );
}
