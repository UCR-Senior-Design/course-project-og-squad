import { useRouter } from "next/navigation";

export default function SignInModal({ onClose }) {
  const router = useRouter();
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white p-8 rounded-lg flex flex-col items-center">
        <p className="text-lg text-center mb-4">
          You need to be signed in to like this post.
        </p>
        <button
          className="bg-custom-main-dark hover:bg-orange-600 text-white px-4 py-2 rounded"
          onClick={() => {
            router.push("/signin");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
