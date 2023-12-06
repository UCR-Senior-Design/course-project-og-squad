import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function Posts({ posts }) {
  const { title, likeCount, imageURL } = posts;

  return (
    <div className="flex">
      {/* Left side: Profile information */}
      <div className="w-3/4 p-10 rounded-md">
        {/* Post Picture */}
        {imageURL && (
          <div className="mb-4 flex flex-col items-center">
            <Image src={imageURL} alt="My Post" className="mb-2" height={175} width={175}/>

            {/* Title with Likes */}
            <div className="flex items-center">
              <p className="text-md font-bold mr-2">{title}</p>
              <div className="flex justify-between">
                <div className="text-center">
                  <FaRegHeart color="custom-main-dark" size={20} />
                  <p className="text-sm font-medium text-custom-main-dark">{likeCount}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
