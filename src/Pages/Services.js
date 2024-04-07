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
          '@media (max-width:1200px)': {
            marginTop: "-300px"
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
                  Services provided in electric bass, fretless bass, acoustic and electric guitar, vocals and sample drums (for duo 'acoustic' acts). Examples of Henry's studio work can be found  <a href="https://open.spotify.com/playlist/6MRyrt5jmW3wugGusg7vZC?si=b9f00a4eb1ce4afa" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>here</a>.
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
                  Services in tracking (all instruments mentioned afore mentioned), programming (VSTs for keyboards, drums, samples etc), mixing and mastering. Examples of Henry's work can be found  <a href="https://open.spotify.com/artist/4gAQHpmAcx1vnA8KmuRwNw?si=kOuqUN2CRr2mOrBHCUGuKw" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>here</a>.
                </Typography>
              </CardContent>
            </Card>
            </div>
            <div style={{ width: "300px", flex: "1 1 0",  display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
              <CardContent>
              <FontAwesomeIcon icon={faGraduationCap} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Tutoring
                </Typography>
                <Typography variant="body2" color="white">
                  Lessons available both in person and online, in electric bass, guitar, production, music theory and music harmony.
                </Typography>
              </CardContent>
            </Card>
            </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '50vh' }}>
              <SocialIcons color={"white"} />
              </div>
              </div>
      );
    }
export default Services;
