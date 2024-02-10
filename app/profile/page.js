"use client";

import Profile from "./profile";
import Posts from "./posts";
import profileImage from "../../assets/abu_yezan.png";
import postPic from "../../assets/zeytandzaa.png";

//temporary import locations?
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserProfile() {

  //update profile name, just testing
  const {data:session} = useSession();
  
  return (
    <div>

      {/* authentication testing: will relocate eventually */}
      <div>
        Temporary:
        <button onClick={() => signOut()}
          className="bg-red-500 px-4 py-2 mx-2 rounded-lg text-white hover:bg-opacity-70">
            Log Out
        </button>
      </div>
      
      {/* END OF: authentication testing  */}
      <div>
        Current User Logged In: <span className="font-bold"> WIP </span>
      </div>

      <Profile
        profile={{
          userName: "abu_yezan",
          posts: "46",
          followers: "100",
          following: "50",
          bio: "Hello my name is Abu Yezan. Welcome to my profile!",
          imageURL: profileImage,
        }}
        
      />
    <div className="grid gap-y-10 my-10 ml-96 mr-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />

          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />

          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
          <Posts
          posts={{
            title: "Zeyt and Zaatar",
            likeCount: "100",
            imageURL: postPic,
          }}

          />
    </div>
      


    </div>
  );
}
