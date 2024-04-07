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
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
              <CardContent>
              <FontAwesomeIcon icon={faMusic} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Sessions
                </Typography>
                <Typography variant="body2" color="white">
                  Services provided in electric bass, fretless bass, acoustic and electric guitar, vocals and sample drums (for duo 'acoustic' acts).
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ width: "30%", minWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
              <CardContent>
              <FontAwesomeIcon icon={faMicrophone} style={{ color: "white", fontSize: "3rem", margin: "auto" }} />
                <Typography variant="h5" component="div" sx={{ color: "white" }}>
                  Production
                </Typography>
                <Typography variant="body2" color="white">
                  Services in tracking (all instruments mentioned afore mentioned), programming (VSTs for keyboards, drums, samples etc), mixing and mastering. Examples of my work can be found here.
                </Typography>
              </CardContent>
            </Card>
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
      );
    }
export default Services;
