import React from "react";
import Image from "next/image";

export default function Post({ post }) {
  const { name, time, calories, description, imageURL } = post;

  return (
    <div className="flex-col pl-8 py-4">
      {imageURL && (
        <div className="mr-4">
          <Image src={imageURL} alt={`Image for ${name}`} width={200} height={200} />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="font-sans text-lg text-gray-800 font-bold">{name}</h1>
        </div>
        <div className="flex">
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">
            <time>{time}</time>
          </p>
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">
            <strong>{calories}</strong>
          </p>
          <p className="font-sans text-xs text-gray-800 mr-4 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
