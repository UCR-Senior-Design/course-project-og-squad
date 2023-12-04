import Image from "next/image";

export default function Profile({ profile }) {
  const { userName, followers, bio, imageURL } = profile;

  return (
    <div className="flex">
      {/* Left side: Profile information */}
      <div className="w-1/4 p-4">
        {/* Profile picture */}
        {imageURL && (
          <div className="mb-4 flex flex-col items-center">
            <Image src={imageURL} alt="Profile Picture" className="rounded-full w-20 h-20 mb-2" />

            {/* Username */}
            <p className="text-lg font-semibold mb-4">{userName}</p>

            {/* Follower count */}
            <div className="mb-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{followers}</h2>
              <p className="text-black-500">Followers</p>
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
