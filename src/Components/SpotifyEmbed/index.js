// SpotifyEmbed.js

import React from 'react';

const SpotifyEmbed = ({ playlistURI }) => {
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistURI}`;

  return (
    <div className="spotify-embed">
      <iframe
        title="Spotify Playlist"
        src={embedUrl}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed; // Ensure the component is exported
