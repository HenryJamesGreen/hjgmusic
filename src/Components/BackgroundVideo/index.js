/* eslint-disable */
// BackgroundVideo.js
import React from 'react';

const BackgroundVideo = ({ videoUrl }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay muted loop style={{ position: 'absolute', minWidth: '100%', minHeight: '100%', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Text */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', textAlign: 'center' }}>
        <h1>Your Text Here</h1>
        <p>Additional Text Here</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
