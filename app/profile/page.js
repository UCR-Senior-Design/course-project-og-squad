import Profile from "./profile";
import image from "./abu_yezan.png";

export default function UserProfile() {
  return (
    <div>
      <Profile
        profile={{
          userName: "abu_yezan",
          followers: "100",
          bio: "Hello my name is Yezan. Welcome to my profile!",
          imageURL: image,
        }}
        
      />
    </div>
  );
}
