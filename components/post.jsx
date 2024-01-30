import Image from "next/image";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
export default function Post({ post, staticImg }) {
  const {
    _id,
    user_name,
    user_pfp, // not yet in DB
    recipe_name,
    recipe_attributes,
    recipe_image, // Image URL will go here, but it needs to be in the database first
    recipe_description,
    recipe_instructions,
    recipe_likes,
  } = post;

  return (
    <div className="bg-orange-100 p-7 rounded-xl flex items-center justify-center mx-auto max-w-[300px]">
      {/* Display the square image if imageURL is provided */}
      {staticImg && (
        <div>
          <div className="flex items-center mb-3">
            <FaUserCircle className="mr-2"style={{ color: "#FF8C00" }} />
            <div>{user_name}</div>
          </div>
          <Image src={staticImg} alt="Post Image" width={300} height={300} />
          <h2 className="font-sans text-lg text-gray-800 font-bold mt-3">
            {recipe_name}
          </h2>
          {/* hardcoded time and cals for now as it should be under recipe_atributes.time and/or recipe_atributes.calories etc.
          This will later be more dynamic depending on the attributes given  */}
          <div className="flex items-center mt-2">
            <div className="flex flex-col items-center mr-4">
              <IoIosTimer />
              <p className="font-sans text-xs text-gray-500">30 mins</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFireFlameCurved style={{ color: "#FFA500" }} />
              <p className="font-sans text-xs text-gray-500">1069 cals</p>
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
    </div>
  );
}
