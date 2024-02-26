"use client";
import FormatPostGrid from "@/components/gridPosts";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const searchRecipes = await user.functions.searchRecipes(query.term);
        setRecipes(() => searchRecipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <FormatPostGrid recipes = { recipes }/>
    </div>
  );
}