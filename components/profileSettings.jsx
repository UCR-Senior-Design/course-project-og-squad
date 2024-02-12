import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileSettings({setShowSettings, profileSettings}) {
  const { userName, bio, profilePic } = profileSettings;
  
  const settingsRef = useRef();

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setShowSettings(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: "easeOut"}}
        ref={settingsRef} 
        className="border-solid border-2 border-custom-main-dark rounded-lg backdrop-blur-md"
      >
        <div className="bg-custom-main-dark rounded-t-lg p-3"> {/* Orange background for top */}
          {/* Title */}
          <h1 className="text-black text-xl font-bold">Edit Profile</h1>
        </div>
        <div className="bg-white rounded-b-lg p-4"> {/* White background for rest */}
          {/* Settings Content */}
          <div className = "flex flex-col">
            <div className = "flex justify-center items-center bg-orange-100 p-2 rounded-lg my-4">
              <Image src={profilePic} alt="Profile Picture" className="rounded-full w-16 h-16"/>
              <div className="mx-3 px-1 font-bold border-solid border border-[#A3A3A3] rounded-xl">
                {userName}
              </div>
              <button className="ml-12 bg-custom-main-dark p-2 rounded-xl font-semibold">
                  Change Photo
              </button>
            </div>
            <p className="font-semibold mt-4">
              Bio
            </p>
            <textarea
              maxlength="150"
              type="text"
              defaultValue={bio}
              className="border-solid border-2 border-custom-main-dark p-2 pb-16 rounded-lg mb-4"
            />
          </div>
          <button className="ml-10 bg-custom-main-dark p-2 px-8 ml-60 mt-4 mb-2 rounded-xl font-semibold">
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
}
