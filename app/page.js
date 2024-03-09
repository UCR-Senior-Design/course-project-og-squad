"use client";

import Link from "next/link";
import SignInButton from "@/components/signInButton";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LandingPage() {
  const { data: session } = useSession();

  return (
    <main className="flex tems-center justify-center ml-10 h-screen">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-bold mb-2"
        >
          Share Your
          <span className="text-custom-main-dark"> Recipes</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-7"
        >
          Your Culinary Connection to the World!
        </motion.p>

        <div className="flex items-center justify-center">
          {!session && (
            <div>
              <SignInButton />
              <span className="mx-3">or</span>
            </div>
          )}

          <div className="bg-white text-custom-main-dark border-solid border-2 border-custom-main-dark px-4 py-2 rounded-lg hover:bg-custom-main-light transition-colors ease-linear">
            <Link href="/home">Browse recipes</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
