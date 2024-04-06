import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = ["Home", "About", "Contact", "Services"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleOpenNavMenu = (event) => {
    if (isMobile) {
      setMobileOpen(true);
    } else {
      setAnchorElNav(event.currentTarget);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileOpen(false);
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "black",
          color: "white",
          width: 240,
        }
      }}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton onClick={handleCloseNavMenu}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/${page.toLowerCase()}`}
              >
                <ListItemText primary={page} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba( 0, 0, 0, 0.7)", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                padding={"0px"}
                marginTop="10px"
                component="div"
                sx={{ mb: 1, textDecoration: 'underline' }}
              >
                HJG
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ mx: 1, color: "white" }}
                      component={Link}
                      to={`/${page.toLowerCase()}`}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  TransitionComponent={Slide}
                  TransitionProps={{ direction: 'down' }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/${page.toLowerCase()}`}
                      >
                        {page}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {drawer}
    </Box>
  );
}

export default Navbar;
