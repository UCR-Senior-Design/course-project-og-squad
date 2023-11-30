import { Love_Ya_Like_A_Sister } from "next/font/google";
import React from "react";
import Image from "next/image";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

export default function Post({ post }) {
  const { name, time, calories, description, imageURL } = post;

  return (
    <div className="flex-col pl-8 py-4">
      {/* Display the square image if imageURL is provided */}
      {imageURL && (
        <div className="mr-4">
          <div className="bg-orange-200 rounded-md overflow-hidden flex flex-col items-start p-4 pl-12" style={{ width: "300px", height: "400px" }}>
            <Image src={imageURL} alt="Post Image" width={200} height={200} />
            <h1 className="font-sans text-lg text-gray-800 font-bold mt-2">{name}</h1>
            <div className="flex items-center mt-2">
              <p className="ml-4"><IoIosTimer /></p>
              <p style={{ color: '#FFA500' }} className="ml-2 pl-10"><FaFireFlameCurved /></p>
            </div>
            <div className="flex mt-2">
              <p className="font-sans text-xs text-gray-800 mr-4">{time}</p>
              <p className="font-sans text-xs text-gray-800">{calories}</p>
            </div>
            <p className="font-sans text-xs text-gray-800 mt-2">{description}</p>
          </div>
        </div>
      )}

      {/* Rest of your content outside the orange background */}
      {/* ... */}
    </div>
  );
}