import React from 'react';
import Image from "next/image";
import image from "app/recipes/zeytandzaa.png"
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Recipes = () => {
    return (
      <div className='mt-10 mx-auto max-w-[300px]'>
      <div><FaUserCircle className="pb-2 text-orange-500" size={25} /></div>
      <div className="flex justify-center">
        <Image src={image} alt="zeyt" width={400} height={400} />
      </div>
      <div className='flex items-center pt-2 '>
        <p className='font-bold'>Zeyt and Zaatar</p>
        <div className='pl-32'>
          <FaRegHeart style={{ color: "#FF8C00" }} size={20} />
          </div>
          <div className='pl-2'><CiBookmark style={{ color: "#FF8C00" }} size={20} /></div>
      </div>
    </div>
     
    );
  };
  
  export default Recipes;