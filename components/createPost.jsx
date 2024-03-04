"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Post from "@/components/post";

export default function CreatePost() {
  const { data: session } = useSession();

  const [showPreview, setShowPreview] = useState(false);
  const [recipeImagePreview, setRecipeImagePreview] = useState(null);
  const [recipeImageUpload, setRecipeImageUpload] = useState(null);
  const [formData, setFormData] = useState({
    recipe_name: "",
    recipe_time: "",
    recipe_cals: "",
    recipe_description: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setRecipeImagePreview(URL.createObjectURL(e.target.files[0]));
      setRecipeImageUpload(e.target.files[0]);
    }
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Get pre-signed URL for image upload
      const presignedUrlResponse = await fetch("api/getUploadImageURL", {
        method: "GET",
      });

      if (!presignedUrlResponse.ok) {
        throw new Error("Failed to obtain pre-signed URL for image upload");
        return;
      }

      // Step 2: Get imageUrl and Upload image to pre-signed upload URL
      const { uploadUrl, imageUrl } = await presignedUrlResponse.json();

      const uploadImageResponse = await fetch(uploadUrl, {
        method: "PUT",
        body: recipeImageUpload,
        headers: {
          "Content-Type": "image/jpeg",
        },
      });

      if (!uploadImageResponse.ok) {
        throw new Error("Failed to upload image");
        return;
      }

      // Step 3: Create post with imageUrl
      const createPostResponse = await fetch("api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: session.user?.id,
          user_name: session.user?.name,
          recipe_name: formData.recipe_name,
          recipe_time: formData.recipe_time,
          recipe_cals: formData.recipe_cals,
          recipe_description: formData.recipe_description,
          recipe_image: imageUrl,
        }),
      });

      if (!createPostResponse.ok) {
        throw new Error("Failed to create post");
        return;
      }

      // Handle successful post creation
      console.log("Post created successfully");
      router.push("/profile");
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-36"
    >
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Your input fields */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="recipe_name">
            Recipe Title:
          </label>
          <input
            type="text"
            name="recipe_name"
            placeholder=""
            id="recipe_name"
            required
            value={formData.recipe_name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="recipe_time">
            Preparation Time (min):
          </label>
          <input
            type="number"
            name="recipe_time"
            placeholder=""
            id="recipe_time"
            required
            value={formData.recipe_time}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="recipe_cals">
            Calories:
          </label>
          <input
            type="number"
            name="recipe_cals"
            placeholder=""
            id="recipe_cals"
            required
            value={formData.recipe_cals}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-sm font-medium mb-1"
            htmlFor="recipe_description"
          >
            Description:
          </label>
          <textarea
            name="recipe_description"
            placeholder="What about this dish..."
            id="recipe_description"
            required
            value={formData.recipe_description}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="recipe_image">
            Upload Image
          </label>
          <input
            name="recipe_image"
            id="recipe_image"
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="mb-2"
          />
        </div>

        {/* Preview Button */}
        <div className="flex items-center space-x-4 mt-4">
          <button
            type="button"
            className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
            onClick={handlePreview}
          >
            Preview
          </button>
        </div>

        {/* Preview Section */}
        {showPreview && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            {/* Pass formData to the Post component */}
            <Post
              post={{
                ...formData,
                user_pfp: null,
                user_name: session.user?.name,
                recipe_name: formData.recipe_name,
                recipe_recipe_description: formData.recipe_description,
                recipe_cals: formData.recipe_cals,
                recipe_time: formData.recipe_time,
                recipe_image: recipeImagePreview,
              }}
            />
          </div>
        )}
        {/* Publish Post Button*/}
        {showPreview && (
          <div className="flex items-center space-x-4 mt-4">
            <button
              type="submit"
              className="bg-custom-main-dark px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
            >
              Publish Post
            </button>
          </div>
        )}
      </form>
    </motion.div>
  );
}
