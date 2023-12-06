import Link from "next/link";

export default function SignInButton({ isAutorized, setIsAuthorized }) {
  return (
    <Link href="/signin">
      <button
        onClick={() => setIsAuthorized(!isAutorized)}
        className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
      >
        Sign In
      </button>
    </Link>
  );
}
