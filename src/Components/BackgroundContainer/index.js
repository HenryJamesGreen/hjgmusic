/* eslint-disable */
// src/components/BackgroundContainer.js
import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../../images/Bass.jpeg"; // Adjusted relative path

const BackgroundContainer = ({ children }) => {
  return (
    <Box
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "10px", // Adjust padding as needed
      }}
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.7
        , // Adjust opacity for the background image
        }}
      ></div>
      
      {/* Content */}
      <Box
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0)", // Adjust opacity for the content
          padding: "0px", // Adjust padding as needed
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundContainer;
