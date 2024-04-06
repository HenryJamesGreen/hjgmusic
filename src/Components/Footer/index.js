import * as React from "react";
import { Typography, Container, Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        py: 1,
        marginTop: '-4px'
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" align="center" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Henry James Green. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Made with ❤️ by <Link href="https://yourwebsite.com">El Fuego Labs</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
