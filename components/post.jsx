"use client"

import Image from "next/image";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Post({ post, staticImg }) {
  const {
    _id,                    //not yet implemented; for users to link their posts to own profile
    user_name,              //not yet implemented
    user_pfp,               //not yet implemented; not yet in DB
    recipe_name,            
    recipe_image,           //not yet implemented; image URL will go here, but it needs to be in the database first
    recipe_description,
    recipe_instructions,    //not yet implemented
    recipe_likes,           //not yet implemented
    recipe_time,         
    recipe_cals      
  } = post;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-orange-100 p-7 rounded-xl flex items-center justify-center mx-auto max-w-[300px]"
    >
      {/* Display the square image if imageURL is provided */}
      {staticImg && (
        <div>
          <div className="flex items-center mb-3">
            <FaUserCircle className="mr-2"style={{ color: "#FF8C00" }} />
            <div>{user_name}</div>
          </div>
          <Image src={staticImg} alt="Post Image" width={300} height={300} />   {/*image should go here */}
          <h2 className="font-sans text-lg text-gray-800 font-bold mt-3">
            {recipe_name}
          </h2>
          {/* hardcoded time and cals for now as it should be under recipe_atributes.time and/or recipe_atributes.calories etc.
          This will later be more dynamic depending on the attributes given  */}
          <div className="flex items-center mt-2">
            <div className="flex flex-col items-center mr-4">
              <IoIosTimer />
              <p className="font-sans text-xs text-gray-500">{recipe_time} mins </p>
            </div>
            <div className="flex flex-col items-center">
              <FaFireFlameCurved style={{ color: "#FFA500" }} />
              <p className="font-sans text-xs text-gray-500">{recipe_cals} cals</p>
            </div>
            <div className="pl-24">
              <FaRegHeart style={{ color: "#FF8C00" }} size={20} />
            </div>
          </div>

          <p className="font-sans text-sm text-gray-800 mt-3">
            {recipe_description}
          </p>
        </div>
      )}
    </motion.div>
  );
}
