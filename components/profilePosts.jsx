import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProfilePosts({ posts }) {
  const { title, likeCount, imageURL } = posts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mx-auto max-w-[300px]"
    >
      {/* Left side: Profile information */}
      <div>
        {/* Post Picture */}
        {imageURL && (
          <div className="flex bg-orange-100 p-5 rounded-lg flex-col items-center">
            <img
              src={imageURL}
              alt="My Post"
              className="mb-2"
              height={200}
              width={200}
            />

            {/* Title with Likes */}
            <div className="flex items-center justify-between w-[200px]">
              <p className="text-md font-bold mr-2">{title}</p>
              <div className="flex flex-col items-center">
                <FaRegHeart
                  className="cursor-pointer"
                  color="FF9103"
                  size={20}
                />
                <p className="text-sm font-medium text-custom-main-dark">
                  {likeCount}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}