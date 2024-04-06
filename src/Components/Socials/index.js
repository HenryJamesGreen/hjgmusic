// SocialIcons.js
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const iconStyle = {
    fontSize: "24px",
    marginRight: "10px",
    color: "white",
    transition: "color 0.3s ease",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      {/* Instagram */}
      <a href="https://www.instagram.com/henryjames.music/" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}
         style={{ marginRight: "10px", marginLeft: "15px" }}>
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ ...iconStyle, color: hoveredIndex === 0 ? "rgba(0, 0, 0, 0.5)" : "black" }}
        />
      </a>
      {/* TikTok */}
      <a href="https://www.tiktok.com/@henryjames.music" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
         style={{ marginRight: "10px" }}>
        <FontAwesomeIcon
          icon={faTiktok}
          style={{ ...iconStyle, color: hoveredIndex === 1 ? "rgba(0, 0, 0, 0.5)" : "black" }}
        />
      </a>
      {/* YouTube */}
      <a href="https://www.youtube.com/henryjamesmusic" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
         style={{ marginRight: "10px" }}>
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ ...iconStyle, color: hoveredIndex === 2 ? "rgba(0, 0, 0, 0.5)" : "black" }}
        />
      </a>
      {/* Facebook */}
      <a href="https://www.facebook.com/henryjamesbass" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ ...iconStyle, color: hoveredIndex === 3 ? "rgba(0, 0, 0, 0.5)" : "black" }}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
