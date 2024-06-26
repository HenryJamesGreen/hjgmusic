/* eslint-disable */
import React from "react";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import thumbnailsData from "../thumbnails.json";
import SpotifyEmbed from "../Components/SpotifyEmbed";
import SocialIcons from "../Components/Socials";
import FunctionsData from "../functions.json";

function Portfolio() {
  const [openThumbnailDialog, setOpenThumbnailDialog] = React.useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = React.useState(null);
  const [openFunctionDialog, setOpenFunctionDialog] = React.useState(false);
  const [selectedFunction, setSelectedFunction] = React.useState(null);

  const handleOpenThumbnailDialog = (index) => {
    setSelectedThumbnail(index);
    setOpenThumbnailDialog(true);
  };

  const handleCloseThumbnailDialog = () => {
    setOpenThumbnailDialog(false);
  };

  const handleOpenFunctionDialog = (index) => {
    setSelectedFunction(index);
    setOpenFunctionDialog(true);
  };

  const handleCloseFunctionDialog = () => {
    setOpenFunctionDialog(false);
  };

  const handleThumbnailClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgba(0 , 0 , 0 , 0.9)",
        minHeight: "100vh",
        padding: "20px", // Adjusted padding for mobile
        textAlign: "center",
      }}
    >
      <Typography gutterBottom variant="h3" component="div" sx={{ color: "white", marginTop: "100px", '@media (max-width:600px)': {
          marginTop: "0px"
      
          },
         }}>
        PORTFOLIO
      </Typography>

      <section>
        <Typography variant="h5" sx={{ color: "white", marginTop: "20px" }}>
          SESSIONS, PRODUCTION AND LIBRARY MUSIC
        </Typography>
        {/* Listen Here Section */}
        <div style={{ marginTop: "20px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <SpotifyEmbed playlistURI="6MRyrt5jmW3wugGusg7vZC?utm" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SpotifyEmbed playlistURI="5wQgVmMPCXHND90optmZCb?utm" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SpotifyEmbed playlistURI="3mpK9QvDhBjGl6Ay2zDmkd" />
            </Grid>
          </Grid>
        </div>
      </section>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: "20px" }}>
        {thumbnailsData.map((thumbnail) => (
          <Grid key={thumbnail.id} item xs={12} sm={6} md={4} lg={2}>
            <div style={{ position: "relative" }}>
              <img
                src={thumbnail.imageSrc}
                alt={`Thumbnail ${thumbnail.id}`}
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                onClick={() => handleOpenThumbnailDialog(thumbnail.id)}
              />
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenThumbnailDialog(thumbnail.id)}
              >
                Click for More Info
              </Typography>
              <Dialog open={openThumbnailDialog && selectedThumbnail === thumbnail.id} onClose={handleCloseThumbnailDialog}>
                <DialogTitle>{thumbnail.title}</DialogTitle>
                <DialogContent>
                  <Typography>{thumbnail.description}</Typography>
                  <Typography>Composers: {thumbnail.composers}</Typography>
                </DialogContent>
              </Dialog>
            </div>
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="body1" sx={{ color: "white", marginTop: "50px", marginBottom: "20px" }}>
        For more recent feeds, check out Henry's socials below:
      </Typography>
      <SocialIcons color="white" style={{ marginBottom: "20px"}} />
      
      {/* Responsive YouTube embed */}
      <div style={{ position: "relative", maxWidth: "560px", margin: "0 auto", marginTop: "50px" }}>
        <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8p8rHgOCu7A?si=Pg74uL1WSA13WpOj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>

      {/* Functions Section */}
      <section style={{ marginTop: "50px" }}>
        <Typography variant="h5" sx={{ color: "white", marginTop: "20px" }}>
          FUNCTIONS
        </Typography>
        <Typography variant="body1" sx={{ color: "white", marginTop: "20px" }}>
          Henry also plays in a number of function bands. Some examples are below:
        </Typography>
        <div style={{ marginTop: "20px" }}>
          <Grid container spacing={2} justifyContent="center">
            {FunctionsData.map((functions) => (
              <Grid key={functions.id} item xs={12} sm={6} md={4} lg={4}>
                <div style={{ position: "relative", marginBottom: "50px" }}>
                  <a href={functions.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={functions.imageSrc}
                      alt={`Thumbnail ${functions.id}`}
                      style={{ width: "100%", height: "auto", cursor: "pointer" }}
                      onClick={() => handleOpenFunctionDialog(functions.id)}
                    />
                  </a>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      padding: "5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpenFunctionDialog(functions.id)}
                  >
                    {functions.title}
                    <br />
                    Click for More Info
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
