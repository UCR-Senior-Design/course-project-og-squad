"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SnapChefLogo from "../assets/SnapChefV1.svg";
import Home from "../assets/icons/home.svg";
import HomeFill from "../assets/icons/homefill.svg";
import Bell from "../assets/icons/bell.svg";
import BellFill from "../assets/icons/bellfill.svg";
import Post from "../assets/icons/post.svg";
import PostFill from "../assets/icons/postfill.svg";
import Fav from "../assets/icons/favorites.svg";
import FavFill from "../assets/icons/favoritesfill.svg";
import Profile from "../assets/icons/Profile.svg";
import ProfileFill from "../assets/icons/profilefill.svg";

function Navbar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    // Update active path whenever the route changes
    setActivePath(pathname);
  }, [pathname]);

  const isLinkActive = (path) => path === activePath;

  return (
    <nav className="flex items-center justify-between p-4 relative">
      {/* Use the larger SnapChef.svg logo */}
      <Link href="/">
        <Image
          src={SnapChefLogo}
          alt="SnapChefLogo"
          className="cursor-pointer"
          width={180}
          height={180}
          style={{ position: "relative", top: "0px" }} // Adjust the top value
        />
      </Link>

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
        <Link href="/home">
          <Image
            src={isLinkActive("/home") ? HomeFill : Home}
            alt="Home"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/notifications">
          <Image
            src={isLinkActive("/notifications") ? BellFill : Bell}
            alt="Bell"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/post">
          <Image
            src={isLinkActive("/post") ? PostFill : Post}
            alt="Post"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/favorites">
          <Image
            src={isLinkActive("/favorites") ? FavFill : Fav}
            alt="Home"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/profile">
          <Image
            src={isLinkActive("/profile") ? ProfileFill : Profile}
            alt="Home"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
