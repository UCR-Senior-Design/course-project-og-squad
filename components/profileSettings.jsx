import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfileSettings({ setShowSettings, profileSettings }) {
  const { id, userName, bio, profilePic } = profileSettings;
  const [updatedBio, setUpdatedBio] = useState(bio);

  const settingsRef = useRef();

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setShowSettings(false);
    }
  };

  const handleConfirmClick = async () => {
    try {
      const res = await fetch("/api/updateUserInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          updatedBio: updatedBio,
        }),
      });
      if (res.ok) {
        setShowSettings(false);
        window.location.reload();
      } else {
        console.error("Failed to update bio");
      }
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 m-auto max-w-10"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        ref={settingsRef}
        className="border-solid border-2 border-custom-main-dark rounded-lg backdrop-blur-md "
      >
        <div className="bg-custom-main-dark rounded-t-lg p-3">
          {/* Orange background for top */}
          {/* Title */}
          <h1 className="text-black text-xl font-bold">Edit Profile</h1>
        </div>
        <div className="bg-white rounded-b-lg p-4">
          {/* White background for rest */}
          {/* Settings Content */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center bg-orange-100 p-2 rounded-lg my-4">
              <div className="flex justify-center items-center">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  className="rounded-full w-16 h-16"
                />
                <div className="mx-3 px-1 font-bold border-solid border border-[#A3A3A3] rounded-xl">
                  {userName}
                </div>
              </div>

              <button className="ml-12 bg-custom-main-dark p-2 rounded-xl font-semibold">
                Change Photo
              </button>
            </div>
            <p className="font-semibold mt-4">Bio</p>
            <textarea
              maxlength="150"
              type="text"
              defaultValue={updatedBio}
              className="border-solid border-2 border-custom-main-dark p-2 pb-16 rounded-lg mb-4"
              onChange={(e) => setUpdatedBio(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-opacity-70"
            >
              Log Out
            </button>
            <button
              className=" bg-custom-main-dark p-2 px-8 ml-60 mt-4 mb-2 rounded-xl font-semibold"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
