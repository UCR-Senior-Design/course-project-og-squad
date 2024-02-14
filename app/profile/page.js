"use client";

import { useState, useEffect } from "react";
import Profile from "./profile";
import Posts from "./posts";
import profileImage from "../../assets/abu_yezan.png";
import postPic from "../../assets/zeytandzaa.png";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (session) {
      fetchuserInfo(session.user.id);
    }
  }, [session]);

  const fetchuserInfo = async (userId) => {
    try {
      const res = await fetch("/api/userInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
        console.log(data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <Profile
        profile={{
          id: userInfo?.id,
          userName: userInfo?.username,
          postCount: userInfo?.postCount,
          followerCount: userInfo?.followerCount,
          followingCount: userInfo?.followingCount,
          bio: userInfo?.bio,
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
