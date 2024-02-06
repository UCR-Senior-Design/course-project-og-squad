"use client"
import React, { useState } from 'react';
import Image from "next/image";
import image from "app/recipes/zeytandzaa.png"
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";

const Recipes = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked,
    });
  };

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
        <div className='pl-2'>
          <CiBookmark style={{ color: "#FF8C00" }} size={20} />
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex flex-col items-center mr-4">
          <IoIosTimer />
          <p className="font-sans text-xs text-gray-500"> mins </p>
        </div>
        <div className="flex flex-col items-center">
          <FaFireFlameCurved style={{ color: "#FFA500" }} />
          <p className="font-sans text-xs text-gray-500">cals</p>
        </div>
        <div className=" flex flex-col items-center pl-5 pb-4">
          <LuVegan  style={{ color: "green" }} size={18} />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Ingredients</h2>
        <ul className="list-none m-0 p-0">
          <li className="flex items-center">
            <input
              type="checkbox"
              id="ingredient1"
              className="rounded-full accent-orange-300 w-4 h-4 mr-2"
              checked={checkedItems.ingredient1 || false}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="ingredient1"
              className={checkedItems.ingredient1 ? "line-through" : ""}
            >
              1 cup Olive Oil
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="ingredient2"
              className="rounded-full accent-orange-300 w-4 h-4 mr-2"
              checked={checkedItems.ingredient2 || false}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="ingredient2"
              className={checkedItems.ingredient2 ? "line-through" : ""}
            >
              1 cup Zaatar
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="ingredient3"
              className="rounded-full accent-orange-300 w-4 h-4 mr-2"
              checked={checkedItems.ingredient3 || false}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="ingredient3"
              className={checkedItems.ingredient3 ? "line-through" : ""}
            >
              Pita bread
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
