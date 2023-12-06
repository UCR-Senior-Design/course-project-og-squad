import Link from "next/link";

export default function SignInButton() {
  return (
    <Link href="/signin">
      <button>Sign In</button>
    </Link>
  );
}
