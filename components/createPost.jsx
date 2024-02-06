"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Post from '@/components/post';
import postPic from '@/assets/zeytandzaa.png';
import { formatRevalidate } from 'next/dist/server/lib/revalidate';

export default function CreatePost() {
  const [formData, setFormData] = useState({ 
    user_name: localStorage.getItem("username"),
    recipe_name: "",
    recipe_time: "",
    recipe_cals: "",
    recipe_description: "",
  });

  const router = useRouter();

  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const res = await fetch ('api/createPost', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_name: formData.user_name,   //temporarily passing as fixed parameter until we figure out how to link to unique user
            recipe_name: formData.recipe_name,
            recipe_time: formData.recipe_time,
            recipe_cals: formData.recipe_cals,
            recipe_description: formData.recipe_description,
          }),
        });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/profile")
      } else {
        console.log("New post creation failed.", error);
      }
    } catch (error) {
      console.log("Error during post creation: ", error);
    }
    //END OF: creating new post, passed to DB
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-36">
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
          <label className="text-sm font-medium mb-1" htmlFor="recipe_description">
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
                user_name: formData.user_name,
                recipe_name: formData.recipe_name,
                recipe_recipe_description: formData.recipe_description,
                recipie_cals: formData.recipe_cals,
                recipie_time: formData.recipe_time,
              }}
              staticImg={postPic}
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
    </div>
  );
}
