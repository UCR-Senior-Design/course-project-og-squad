import { fetchFavRecipes } from "@/constants";
import Post from "@/models/post";

export default async function Favorites({ params }) {
  //const data = await fetchFavRecipes();
  return (
    <div className="h-screen">
      <h1 className="flex flex-col items-center justify-center text-4xl font-semibold">Saved Recipes</h1>
      {/* <div className="m-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {data.posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div> */}
    </div>
  );
}
