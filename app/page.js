import Link from "next/link";
import SignInButton from "@/components/signInButton";

export default function LandingPage() {
  return (
    <main className="flex tems-center justify-center ml-10 h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-2">
          Share Your
          <span className="text-custom-main-dark"> Recipes</span>
        </h1>
        <p className="mb-7">Your Culinary Connection to the World!</p>

        <div className="flex items-center justify-center">
          <SignInButton />
          <span className="mx-3">or</span>
          <div className="bg-white text-custom-main-dark border-solid border-2 border-custom-main-dark px-4 py-2 rounded-lg hover:bg-custom-main-light">
            <Link href="/home">Browse recipes</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
