"use client";
import FormatPostGrid from "@/components/gridPosts";
import Image from "next/image";
import LoadingGif from "@/assets/loading.gif";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as Realm from "realm-web";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allRecipes = await user.functions.getAllRecipes();
        setRecipes(allRecipes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    
    fetchData();
  }, []);

  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      {loading && (
        <>
          <h1 className="flex justify-center items-center text-5xl font-bold animate-pulse text-center py-96">
            Loading&nbsp;
            <span className="text-custom-main-dark"> Recipes</span>
            <div className="ml-4">
              <Image src={LoadingGif} alt="loading" width={80} height={80}/>
            </div>
          </h1>
        </>
      )}
      {!loading && <FormatPostGrid recipes={recipes} />}
    </motion.div>
  );
}

