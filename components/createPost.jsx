import Link from "next/link";

export default function CreatePostButton() {
  return (
    <Link href="/create">
      <button
        className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
      >
     create
      </button>
    </Link>
  );
}
