import Image from "next/image";
import settingIcon from "./Setting_fill.svg"

export default function Profile({ profile }) {
  const { userName, posts, followers, following, bio, imageURL } = profile;

  return (
    <div className="flex">
      {/* Left side: Profile information */}
      <div className="w-1/4 p-4">
        {/* Profile picture */}
        {imageURL && (
          <div className="mb-4 flex flex-col items-center">
            <Image src={imageURL} alt="Profile Picture" className="rounded-full w-20 h-20 mb-2" />

            {/* Username with setting icon */}
            <div className="flex items-center mb-4">
              <p className="text-lg font-semibold mr-2">{userName}</p>
              <Image src={settingIcon} alt="Settings Icon" className="w-5 h-5" />
            </div>


            {/* Counts */}
            <div className="mb-4 flex justify-between">
              <div className="text-center">
                <h2 className="text-sm font-semibold mb-1">{posts}</h2>
                <p className="text-xs text-gray-500">Posts</p>
              </div>
              <div className="text-center mx-4">
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
              <p className="text-sm text-black-500">{bio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
