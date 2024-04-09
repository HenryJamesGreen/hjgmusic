/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import SocialIcons from '../Components/Socials/index';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophone, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import portraitVideoSource from '../images/henreel2.mov';

function Services() {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Set background color to black
            minHeight: "100vh", // Ensure full viewport height
            padding: "30px", // Add padding for better spacing
            marginBottom: "4px",
          }}
        >
         <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "white",
          marginBottom: "20px",
          marginTop: "-330px",
          textAlign: "center",
          // Media queries for adjusting typography for mobile screens
          '@media (max-width:2000px)': {
            marginTop: "-100px"
            // Adjust font size for smaller screens
          },
          '@media (max-width:1000px)': {
            marginTop: "-100px"
            // Further adjust font size for even smaller screens
          },

          '@media (max-width:700px)': {
            marginTop: "0px"
            // Further adjust font size for even smaller screens
          },
        }}
      >
        SERVICES
      </Typography>
          <div
            style={{
              maxWidth: "1000px", // Set maximum width
              paddingTop: "0px", // Adjust padding top
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
             <div style={{ width: "300px", flex: "1 1 0", display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center",  }}>
              <CardContent>
              <FontAwesomeIcon icon={faMusic} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Sessions
                </Typography>
                <Typography variant="body2" color="white">
                  Services provided in electric bass, fretless bass, acoustic and electric guitar, vocals and sample drums (for duo/trio 'acoustic' acts).
                </Typography>
              </CardContent>
            </Card>
            </div>
            <div style={{ width: "300px", flex: "1 1 0",  display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
              <CardContent>
              <FontAwesomeIcon icon={faMicrophone} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Production
                </Typography>
                <Typography variant="body2" color="white">
                  Services in tracking (all instruments mentioned afore mentioned), programming (VSTs for keyboards, drums, samples etc), mixing and mastering.
                </Typography>
              </CardContent>
            </Card>
            </div>
            <div style={{ width: "300px", flex: "1 1 0",  display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
              <CardContent>
              <FontAwesomeIcon icon={faGraduationCap} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Composition
                </Typography>
                <Typography variant="body2" color="white">
                 This often ties in with production and sessions and tends to center on either collaboration with artists (songwriting), or film, TV and ads libraries.
                </Typography>
              </CardContent>
            </Card>
            </div>
            </div>
            <Typography sx={{marginTop: "20px", color: "white"}}><a href="./Portfolio"  rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>Click here for examples of Henry's work</a>.</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '50vh' }}>
              <SocialIcons color={"white"} />
              </div>
              </div>
      );
    }
export default Services;
