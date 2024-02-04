"use client";

import { useState } from 'react';
import Post from '@/components/post';
import postPic from '@/assets/zeytandzaa.png';

export default function CreatePost() {
  const [formData, setFormData] = useState({
    postTitle: "",
    preparationTime: "",
    calories: "",
    description: "",
  });
  const [error, setError] = useState("");

    //console.log("Recipe Title: ", formData.postTitle);

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

    if (!formData.postTitle || !formData.preparationTime || !formData.calories || !formData.description){
      setError("All fields require input.");
      return;
    }
  
    try {
        const res = await fetch ('api/createPost', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            postTitle: formData.postTitle,
            preparationTime: formData.preparationTime,
            calories: formData.calories,
            description: formData.description,
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
    //END OF: registering user, passing to DB
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-36">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Your input fields */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="postTitle">
            Recipe Title:
          </label>
          <input
            type="text"
            name="postTitle"
            placeholder=""
            id="postTitle"
            required
            value={formData.postTitle}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="preparationTime">
            Preparation Time (min):
          </label>
          <input
            type="text"
            name="preparationTime"
            placeholder=""
            id="preparationTime"
            required
            value={formData.preparationTime}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="calories">
            Calories:
          </label>
          <input
            type="text"
            name="calories"
            placeholder=""
            id="calories"
            required
            value={formData.calories}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            placeholder="What about this dish..."
            id="description"
            required
            value={formData.description}
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
                recipe_name: formData.postTitle,
                recipe_description: formData.description,
                user_name: 'Username',
                user_pfp: null,
                recipie_calories: formData.calories,
                recipie_time: formData.preparationTime,
              }}
              staticImg={postPic}
            />
          </div>
        )}
        {/* Publish Post Button*/}
        { error && (
            <div className="flex w-64 bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
            </div>
        )
        }
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
