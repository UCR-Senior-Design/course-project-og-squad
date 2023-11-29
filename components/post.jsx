
import { Love_Ya_Like_A_Sister } from "next/font/google";
import React from "react";

export default function Post({ post }) {
  const { name, time, cals, likes, imageURL } = post;

  const headerStyle = {
    fontFamily: "Arial",
    fontSize: "11px",
    color: "#334257",
  };

  const priceStyle = {
    fontFamily: "Arial",
    fontSize: "15px",
    color: "#334257",
    margin: "0 11px",
  };

  const standardTextStyle = {
    fontFamily: "Arial",
    fontSize: "9px",
    color: "#A3A3A3",
    // Add any other styles you need
  };

  const phoneTextStyle = {
    fontFamily: "Arial",
    fontSize: "9px",
    color: "#334257",
    // Add any other styles you need
  };

  return (
    <div>
      {/* Display the image if imageURL is provided */}
      {imageURL && <img src={imageURL} alt="Post Image" style={{ width: "200px", height: "200px" }} />}

      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={headerStyle}>{name}</h1>
        <h1 style={priceStyle}>{time}</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Removed the Image component */}
        <p style={standardTextStyle}>{cals}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Removed the Image component */}
        <p style={phoneTextStyle}>{likes}</p>
      </div>
    </div>
  );
}
