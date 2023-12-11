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
        <SignInButton />
      </div>
    </main>
  );
}
