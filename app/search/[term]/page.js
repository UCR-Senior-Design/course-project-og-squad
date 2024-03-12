import Post from "@/components/post";
import { fetchSearchTerm } from "@/constants";

export default async function Search({ params }) {
  try {
    const { term } = params;
    const data = await fetchSearchTerm(term);

    // check if there's recipes in json based on search term
    if (!data || !data.documents) {
      return <p className="font-bold px-12"> No results found for "{term}" </p>;
    }

    return (
      <div>
        <p className="font-bold px-12"> 
          {data.documents.length} results for "{term}"     {/* need to modify to have term return normal string */}
        </p>
        <div className="m-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {data.documents.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching recipe by search term:', error);
  }
}
