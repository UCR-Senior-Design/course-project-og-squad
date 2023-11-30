
import React from "react";
import Image from "next/image";

export default function Post({ post }) {
  const { name, price, condition, phone, imageURL } = post;

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
      {imageURL && <Image src={imageURL} alt="Post Image" width={500} height={500} />}

      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={headerStyle}>{name}</h1>
        <h1 style={priceStyle}>{price}</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Removed the Image component */}
        <p style={standardTextStyle}>{condition}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Removed the Image component */}
        <p style={phoneTextStyle}>{phone}</p>
      </div>
    </div>
  );
}
