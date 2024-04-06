/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import SocialIcons from '../Components/Socials/index';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import portraitVideoSource from '../images/henreel2.mov';

function Services() {
    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Set background color to black
            minHeight: "100vh", // Ensure full viewport height
            padding: "150px", // Add padding for better spacing
            marginTop: "0px", // Adjusting the top margin to position the text higher
            marginBottom: "4px"
          }}
        >
          <div
            style={{
              maxWidth: "1000px", // Set maximum width
              paddingTop: "0px", // Adjust padding top
            }}
          >
            <Typography gutterBottom variant="h3" component="div" sx={{ color: "white" }}> {/* Make heading bigger and text white*/}
              SERVICES
            </Typography>
            
          </div>
        </div>
      );
    }
export default Services;
