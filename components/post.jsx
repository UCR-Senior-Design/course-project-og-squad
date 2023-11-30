
import { Love_Ya_Like_A_Sister } from "next/font/google";
import React from "react";
import Image from "next/image";

export default function Post({ post }) {
  const { name, time, calories, description, imageURL } = post;

  return (
    <div className="flex-col pl-8 py-4">
      {/* Display the square image if imageURL is provided */}
      {imageURL && (
        <div className="mr-4">
          <Image src={imageURL} alt="Post Image" width={200} height={200} />
        </div>
      )}
  
      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="font-sans text-lg text-gray-800 font-bold">{name}</h1>
        </div>
        <div className="flex">
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">{time}</p>
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">{calories}</p>
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">{description}</p>
        </div>
    </div>
  );
}