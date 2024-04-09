import React from "react";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import thumbnailsData from "../thumbnails.json";
import SpotifyEmbed from "../Components/SpotifyEmbed";
import SocialIcons from "../Components/Socials";

function Portfolio() {
  const [open, setOpen] = React.useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = React.useState(null);

  const handleOpen = (index) => {
    setSelectedThumbnail(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Typography gutterBottom variant="h3" component="div" sx={{ color: "white", marginTop: "100px" }}>
        PORTFOLIO
      </Typography>

      <section>
        <Typography variant="h4" sx={{ color: "white", marginTop: "20px" }}>
          Sessions, Production and Library Music
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
                onClick={() => handleOpen(thumbnail.id)}
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
                onClick={() => handleOpen(thumbnail.id)}
              >
                Click for More Info
              </Typography>
              <Dialog open={open && selectedThumbnail === thumbnail.id} onClose={handleClose}>
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
      
      <Typography variant="h4" sx={{ color: "white", marginTop: "50px" }}>
        For more, check Henry's socials below
      </Typography>
      <SocialIcons color="white" style={{ marginTop: "30px"}} />
    </div>
  );
}

export default Portfolio;
