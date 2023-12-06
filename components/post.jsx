import Image from "next/image";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

export default function Post({ post }) {
  const { name, time, calories, description, imageURL } = post;

  return (
    <div className="bg-orange-200 p-7 rounded-xl flex items-center justify-center mx-auto max-w-[300px]">
      {/* Display the square image if imageURL is provided */}
      {imageURL && (
        <div>
          <Image src={imageURL} alt="Post Image" width={300} height={300} />
          <h2 className="font-sans text-lg text-gray-800 font-bold mt-3">
            {name}
          </h2>
          <div className="flex items-center mt-2">
            <p className="ml-4">
              <IoIosTimer />
            </p>
            <p style={{ color: "#FFA500" }} className="ml-2 pl-10">
              <FaFireFlameCurved />
            </p>
          </div>
          <div className="flex mt-1">
            <p className="font-sans text-xs text-gray-500 mr-4">{time}</p>
            <p className="font-sans text-xs text-gray-500">{calories}</p>
          </div>
          <p className="font-sans text-sm text-gray-800 mt-3">{description}</p>
        </div>
      )}
    </div>
  );
}
