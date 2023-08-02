import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Backdrop,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ReportIcon from "@mui/icons-material/Report";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        sx={{
          background:
            "linear-gradient(to right top, #141e30, #182539, #1c2c42, #20334b, #243b55)", // Set a gradient background

          padding: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        {/* Replace the onClick function with your actual drawer functionality */}
        <IconButton
          sx={{ color: "white" }}
          onClick={handleDrawerToggle}
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        {/* Logo or App Name */}
        <Typography
          variant="h5"
          fontFamily="sans-serif"
          color="white"
          fontWeight="bold"
        >
          CampusCompass
        </Typography>

        {/* Right-side Actions */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* User Avatar (Example: Replace with your user's avatar image) */}
        </Box>
      </Box>

      {/* Backdrop to enhance user experience when interacting with the drawer */}
      <Backdrop
        open={isDrawerOpen}
        onClick={handleCloseDrawer}
        sx={{ zIndex: 100 }}
      />

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80%",
            maxWidth: "300px",
            background: "transparent", // Set the background to transparent
            color: "white",
            fontSize: "1.2rem", // Increase font size for better readability
          },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(to right top, #141e30, #182539, #1c2c42, #20334b, #243b55)", // Set a gradient background
            color: "white",
            minHeight: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Space below the icons
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              fontFamily="sans-serif"
              fontWeight="bold"
              sx={{ marginBottom: "1rem" }}
            >
              Menu
            </Typography>
            {/* Close button for easy closing */}
            <IconButton
              sx={{ color: "white" }}
              onClick={handleCloseDrawer}
              edge="end"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {/* Add your menu items here */}
            <ListItem button onClick={handleCloseDrawer}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }}/> {/* Add the icon for the Home menu item */}
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleCloseDrawer}>
              <ListItemIcon>
                <ReportIcon sx={{ color: "white" }}/>
                {/* Add the icon for the Reported Labs and Cabins menu item */}
              </ListItemIcon>
              <ListItemText primary="Reported Labs and Cabins" />
            </ListItem>
            {/* Add more menu items here */}
          </List>
          <Box
            sx={{
              marginTop: "1rem",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-around",
              maxHeight: "25%",
            }}
          >
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#C6AFFF" } }} // Add hover effect
              href="https://github.com/ebrahimaliyou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#C6AFFF" } }} // Add hover effect
              href="https://www.linkedin.com/in/ebrahim-aliyou-wudu-15281a121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#C6AFFF" } }} // Add hover effect
              href="https://www.instagram.com/ebro.et/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Social Media Links */}

        {/* Additional content here */}
        <Box
          sx={{
            padding: "1rem",
            minHeight: "50%", // Set the desired height for additional content
          }}
        >
          {/* Add your additional content here */}
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
