import Profile from "./profile";
import image from "./abu_yezan.png";

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
          imageURL: image,
        }}
        
      />
    </div>
  );
}
