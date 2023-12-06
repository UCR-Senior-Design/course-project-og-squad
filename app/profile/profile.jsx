import Image from "next/image";
import { IoMdSettings } from "react-icons/io";


export default function Profile({ profile }) {
  const { userName, posts, followers, following, bio, imageURL } = profile;

  return (
    <div className="flex">
      {/* Left side: Profile information */}
      <div className="w-1/4 p-10 fixed">
        {/* Profile picture */}
        {imageURL && (
          <div className="mb-4 flex flex-col items-center">
            <Image src={imageURL} alt="Profile Picture" className="rounded-full w-28 h-28 mb-2" />

            {/* Username with setting icon */}
            <div className="flex items-center mb-4">
              <p className="text-xl font-bold mr-2">{userName}</p>
              <IoMdSettings color="#A3A3A3" size={30} />

            </div>

            {/* Counts and Bio container */}

              {/* Counts */}
              <div className="mb-3 flex justify-between">
                <div className="text-center">
                  <h2 className="text-sm font-semibold mb-1">{posts}</h2>
                  <p className="text-xs text-gray-500">Posts</p>
                </div>
                <div className="text-center mx-5">
                  <h2 className="text-sm font-semibold mb-1">{followers}</h2>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <h2 className="text-sm font-semibold mb-1">{following}</h2>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
              </div>

              {/* Account bio */}
              <div>
                <p className="text-xs text-black-500 mx-7">{bio}</p>
              </div>

          </div>
        )}
      </div>
    </div>
  );
}
