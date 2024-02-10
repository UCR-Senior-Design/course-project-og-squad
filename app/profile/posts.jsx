import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function Posts({ posts }) {
  const { title, likeCount, imageURL } = posts;

  return (
    <div className="mx-auto max-w-[300px]">
      {/* Left side: Profile information */}
      <div >
        {/* Post Picture */}
        {imageURL && (
          <div className="flex bg-orange-100 p-5 rounded-lg flex-col items-center">
            <Image src={imageURL} alt="My Post" className="mb-2" height={200} width={200}/>

            {/* Title with Likes */}
            <div className="flex items-center">
              <p className="text-md font-bold mr-2">{title}</p>
              <div className="flex flex-col items-center">
                  <FaRegHeart className="cursor-pointer" color="FF9103" size={20} />
                  <p className="text-sm font-medium text-custom-main-dark">{likeCount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
