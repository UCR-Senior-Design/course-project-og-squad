"use client";

import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import { useState, useEffect } from "react";
import ProfileSettings from "@/components/profileSettings";
import { useSession } from "next-auth/react";

export default function Profile({ profile }) {
  const {
    id,
    userName,
    postCount,
    followerCount,
    followingCount,
    bio,
    imageURL,
  } = profile;

  const { data: session } = useSession();
  const [showSettings, setShowSettings] = useState(false); // State to control the visibility of Settings component
  const [isCurrentUserProfile, setIsCurrentUserProfile] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings); // Toggle the visibility of Notifications component
  };

  useEffect(() => {
    // Check if session data is available and if the current user is viewing their own profile
    if (session && session.user.id === id) {
      setIsCurrentUserProfile(true);
    } else {
      setIsCurrentUserProfile(false);
    }
  }, [session, id]);

  return (
    <div className="flex">
      {/* Left side: Profile information */}
      <div className="w-1/4 p-10 fixed">
        {/* Profile picture */}
        {imageURL && (
          <div className="mb-4 flex flex-col items-center">
            <Image
              src={imageURL}
              alt="Profile Picture"
              className="rounded-full w-28 h-28 mb-2"
            />
            {/* Username with setting icon */}
            <div className="flex items-center mb-4">
              <p className="text-xl font-bold mr-2">{userName}</p>
              {isCurrentUserProfile && (
                <IoMdSettings
                  className="cursor-pointer"
                  onClick={handleSettingsClick}
                  color={showSettings ? "#FF9103" : "#A3A3A3"}
                  size={30}
                />
              )}
            </div>

            {/* Counts and Bio container */}

            {/* Counts */}
            <div className="mx-28">
              <div className="mb-3 flex justify-between">
                <div className="text-center">
                  <h2 className="text-sm font-semibold mb-1">{postCount}</h2>
                  <p className="text-xs text-gray-500">Posts</p>
                </div>
                <div className="text-center mx-5">
                  <h2 className="text-sm font-semibold mb-1">
                    {followerCount}
                  </h2>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <h2 className="text-sm font-semibold mb-1">
                    {followingCount}
                  </h2>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
              </div>

              {/* Account bio */}
              <div>
                <p className="mt-5 text-xs text-black-500">{bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {showSettings && (
        <ProfileSettings
          setShowSettings={setShowSettings}
          profileSettings={{
            id: id,
            userName: userName,
            bio: bio,
            profilePic: imageURL,
          }}
        />
      )}
    </div>
  );
}
