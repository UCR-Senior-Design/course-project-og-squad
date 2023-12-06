import Profile from "./profile";
import Posts from "./posts";
import profileImage from "../../assets/abu_yezan.png";
import postPic from "../../assets/zeytandzaa.png";

export default function UserProfile() {
  return (
    <div>
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
  );
}
