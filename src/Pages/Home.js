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

function Home() {
  const [showYouTube, setShowYouTube] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.body.offsetHeight - 100;
      if (scrollPosition > elementPosition) {
        setShowYouTube(true);
      } else {
        setShowYouTube(false);
      }
    };

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    setIsMobile(isMobileDevice);

    const isIpadDevice = /iPad/i.test(window.navigator.userAgent); // Check if device is iPad
    setIsIpad(isIpadDevice);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const videoStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: isMobile ? '100vh' : (isIpad ? '40vh' : 'calc(110vh - 64px)'),
  };

  const theme = createTheme();
  theme.typography.h3 = {
    fontSize: '3rem',
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
    },
    '@media (min-width:601px) and (max-width:1024px)': {
      fontSize: '2.1rem',
      marginBottom: '1.5rem',
    },
    '@media (min-width:1025px)': {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
  };

  theme.typography.body1 = {
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '0.7rem',
    },
    '@media (min-width:601px) and (max-width:1024px)': {
      fontSize: '0.8rem',
    },
    '@media (min-width:1025px)': {
      fontSize: '1.2rem',
    },
  };

 // Other parts of your code remain unchanged...

return (
  <ThemeProvider theme={theme}>
    <div style={{ position: 'relative' }}>
      <video
        className="video-element"
        src={portraitVideoSource}
        autoPlay
        muted
        loop
        playsInline
        style={videoStyle}
      />
      <div style={overlayStyle}>
        <Card sx={{ minWidth: 200, bgcolor: 'rgba(0, 0, 0, 0.7)', border: 'none' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="white">
              HENRY JAMES GREEN
            </Typography>
            <Typography variant="body1" color="white" sx={{ marginBottom: '10px', marginTop: '-20px' }}>
              FREELANCE MUSICIAN/COMPOSER/EDUCATOR
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                bgcolor: 'rgba(255, 192, 203, 0.7)',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(255, 192, 203, 1)',
                },
              }}
              component={Link}
              to="/contact"
            >
              CONTACT HENRY
            </Button>
          </CardContent>
        </Card>
        <SocialIcons color={"black"} />
      </div>
    </div>
  </ThemeProvider>
);

}

export default Home;

