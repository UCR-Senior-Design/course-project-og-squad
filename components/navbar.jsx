

// // Import React
// import React from "react";

// import { navLinks } from "../Constants";
// // Import required components from 'react-icons'
// import { AiOutlineSearch } from "react-icons/ai";

// // Import the SnapChef.svg and ChefHat4.svg logos
// import SnapChefLogo from "../assets/SnapChef.svg";
// import ChefHatLogo from "../assets/ChefHat4.svg"; // Updated file name

// // Import the custom home image
// import HomeImage from "../assets/home.svg"; // Replace with the actual path to your home image

// import Image from "next/image";

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between p-4 relative">
//       {/* Use the larger SnapChef.svg logo */}
//       <Image
//         src={SnapChefLogo}
//         alt="SnapChefLogo"
//         className="cursor-pointer"
//         width={130}
//         height={130}
//         style={{ position: "relative", top: "10px" }} // Adjust the top value
//       />

//       {/* Chef Hat overlay on top of SnapChef logo */}
//       <div className="absolute top-1/3 left-24 transform -translate-x-1/2 -translate-y-5">
//         <Image src={ChefHatLogo} alt="ChefHatLogo" className="cursor-pointer" width={27} height={27} />
//       </div>


//       {/* Search field in the middle */}
//           <div className="flex items-center flex-shrink-0 w-48 px-2">
//         <AiOutlineSearch className="text-gray-600" />
//         <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded" />
//       </div>
//       {/* Navigation links on the right */}
//       <ul className="flex gap-4 list-none">
//         {navLinks.map((link) => (
//           <li key={link.id}>
//             {link.id === "home" ? (
//               <Image src={HomeImage} alt="Home" className="cursor-pointer" width={20} height={20}/>
//             ) : (
//               link.icon
//             )}
//           </li>
//         ))}
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;

// Import React
import React from "react";
import Image from "next/image";

// Import required components from 'react-icons'
import { AiOutlineSearch } from "react-icons/ai";

// Import the SnapChef.svg and ChefHat4.svg logos
import SnapChefLogo from "../assets/SnapChef.svg";
import ChefHatLogo from "../assets/ChefHat4.svg"; // Updated file name

// Import the custom home image and other icons
import HomeImage from "../assets/home.svg"; // Replace with the actual path to your home image
import BellIcon from "../assets/Bell_duotone_line.svg";
import EllipseIcon from "../assets/Ellipse 2.svg";
import BookmarkIcon from "../assets/bookmark.svg";
import UserCircleIcon from "../assets/user-circle.svg";

// Import navigation links
import { navLinks } from "../Constants";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 relative">
      {/* Use the larger SnapChef.svg logo */}
      <Image
        src={SnapChefLogo}
        alt="SnapChefLogo"
        className="cursor-pointer"
        width={130}
        height={130}
        style={{ position: "relative", top: "10px" }} // Adjust the top value
      />

      {/* Chef Hat overlay on top of SnapChef logo */}
      <div className="absolute top-1/3 left-24 transform -translate-x-1/2 -translate-y-5">
        <Image src={ChefHatLogo} alt="ChefHatLogo" className="cursor-pointer" width={27} height={27} />
      </div>

      {/* Search field in the middle */}
      <div className="flex items-center flex-shrink-0 w-48 px-2">
        <AiOutlineSearch className="text-gray-600" />
        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded" />
      </div>

      {/* Navigation links on the right */}
      <ul className="flex gap-4 list-none">
              <Image src={HomeImage} alt="Home" className="cursor-pointer" width={20} height={20} />
              <Image src={BellIcon} alt="Bell" className="cursor-pointer" width={20} height={20} />
              <Image src={EllipseIcon} alt="Ellipse" className="cursor-pointer" width={20} height={20} />
              <Image src={BookmarkIcon} alt="Bookmark" className="cursor-pointer" width={20} height={20} />
              <Image src={UserCircleIcon} alt="UserCircle" className="cursor-pointer" width={20} height={20} />


      </ul>
    </nav>
  );
}

export default Navbar;
