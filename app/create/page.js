'use client';

import { useState } from 'react';
import CreatePostButton from "@/components/createPost";
import PreviewButton from "@/components/PreviewButton";

export default function CreatePost() {
  // State to store the form data
  const [formData, setFormData] = useState({
    recipeName: '',
    preparationTime: '',
    calories: '',
    description: '',
    image: null, // to store the selected file
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      {/* Form for capturing user input */}
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="recipeName">
            Recipe Name:
          </label>
          <input
            type="text"
            name="recipeName"
            id="recipeName"
            value={formData.recipeName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="preparationTime">
            Preparation Time:
          </label>
          <input
            type="text"
            name="preparationTime"
            id="preparationTime"
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
            id="calories"
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
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            id="image"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <PreviewButton formData={formData}/>
        </div>
      </form>
    </div>
  );
}
