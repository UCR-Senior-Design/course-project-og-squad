import Post from "@/components/post";
import staticImg from "@/assets/pizza.png";

const FormatPostGrid = ({ recipes }) => {
    return (
    <div className="m-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((post) => (
        <Post key={post._id} post={post} staticImg={staticImg} />
      ))}
    </div>
  );
}

export default FormatPostGrid;