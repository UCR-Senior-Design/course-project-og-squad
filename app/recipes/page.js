import React from 'react';
import Image from "next/image";
import image from "app/recipes/zeytandzaa.png"
import { FaUserCircle } from "react-icons/fa";

const Recipes = () => {
    return (
      <div className='mt-10 mx-auto max-w-[300px]'>
      <div><FaUserCircle className="pb-2 text-orange-500" size={25} /></div>
      <div className="flex justify-center">
        <Image src={image} alt="zeyt" width={400} height={400} />
      </div>
    </div>
     
    );
  };
  
  export default Recipes;