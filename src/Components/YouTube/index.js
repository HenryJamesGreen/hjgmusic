import React from 'react';
import { Paper, Grid } from '@mui/material';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Grid container justify="center">
        <Grid item>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default YouTubeEmbed;
