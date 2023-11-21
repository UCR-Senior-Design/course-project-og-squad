//import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../Constants";
import { AiOutlineSearch } from "react-icons/ai";

const navbarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
};

const titleStyles = {
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const searchContainerStyles = {
  display: "flex",
  alignItems: "center",
  flex: "0 0 200px",
  margin: "0 10px",
  position: "relative",
};

const searchInputStyles = {
  width: "100%",
  padding: "8px 30px 8px 8px", // Added padding on the right to make space for the icon
  border: "1px solid #999",
  borderRadius: "4px",
};

const searchIconStyles = {
  position: "absolute",
  left: "8px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#999",
};

const navLinksStyles = {
  display: "flex",
  gap: "30px",
  listStyle: "none",
};

function Navbar() {
  return (
    <nav style={navbarStyles}>
      {/* Title on the top left */}
      <p style={titleStyles}>SnapChef</p>

      {/* Search field in the middle */}
      <div style={searchContainerStyles}>
        <AiOutlineSearch style={searchIconStyles} />
        <input type="text" style={searchInputStyles} />
      </div>

      {/* Navigation links on the right */}
      <ul style={navLinksStyles}>
        {navLinks.map((link) => (
          <li key={link.id}>{link.icon}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
