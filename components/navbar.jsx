import Image from "next/image";
import HomeImage from "../assets/home.svg"; // Replace with the actual path to your home image
import BellIcon from "../assets/Bell_duotone_line.svg";
import EllipseIcon from "../assets/Ellipse 2.svg";
import BookmarkIcon from "../assets/bookmark.svg";
import UserCircleIcon from "../assets/user-circle.svg";
import { AiOutlineSearch } from "react-icons/ai";
import SnapChefLogo from "../assets/SnapChefV1.svg";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 relative">
      {/* Use the larger SnapChef.svg logo */}
      <Image
        src={SnapChefLogo}
        alt="SnapChefLogo"
        className="cursor-pointer"
        width={180}
        height={180}
        style={{ position: "relative", top: "0px" }} // Adjust the top value
      />

      {/* Search field in the middle */}
      <div className="flex items-center flex-shrink-0 w-48 px-2">
        <AiOutlineSearch className="text-gray-600" />
        <input
          type="text"
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {/* Navigation links on the right */}
      <ul className="flex gap-4 list-none">
        <Image
          src={HomeImage}
          alt="Home"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src={BellIcon}
          alt="Bell"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src={EllipseIcon}
          alt="Ellipse"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src={BookmarkIcon}
          alt="Bookmark"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src={UserCircleIcon}
          alt="UserCircle"
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
