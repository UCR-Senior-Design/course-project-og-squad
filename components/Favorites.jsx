"use client";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import SignInModal from "./signInModal";
import { fetchProfile } from "@/constants";

export default function Favorites({ recipeId }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchFavoritedPosts = async () => {
      if (session) {
        try {
          const userData = await fetchProfile(session.user.name);
          setIsFavorited(userData.user.favoritedPosts.includes(recipeId));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchFavoritedPosts();
  }, [session]);

  const handleFavClick = async () => {
    if (!session) {
      setShowModal(true);
      return;
    }

    try {
      const method = !isFavorited ? "PATCH" : "DELETE";
      const response = await fetch("/api/updateFavorites", {
        method,
        body: JSON.stringify({
          user_id: session.user.id,
          recipeId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update favorites");
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <div className="flex-row items-center justify-center">
      {isFavorited ? (
        <FaBookmark
          className="text-custom-main-dark text-2xl hover:cursor-pointer"
          onClick={handleFavClick}
        />
      ) : (
        <FaRegBookmark
          className="text-custom-main-dark text-2xl hover:cursor-pointer"
          onClick={handleFavClick}
        />
      )}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
