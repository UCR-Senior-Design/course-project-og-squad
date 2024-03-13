import Post from "@/components/post";
import { getHomePageRecipes } from "@/constants";

export default async function Home() {
  const data = await getHomePageRecipes(); // needed fix: shouldn't get all the recipe posts in the DB

  return (
    <div className="m-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {data.documents.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}