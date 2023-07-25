import React from "react";
import { Box, Typography, ButtonBase, Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu"; // Replace with any relevant menu icon

const NavBar = () => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundImage: "linear-gradient(to right top, #141e30, #182539, #1c2c42, #20334b, #243b55)",
        padding: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4rem",
        borderBottom: "1px solid #e6e6e6",
      }}
    >
      {/* Logo or App Name */}
      <Typography variant="h5" fontFamily="sans-serif" color="white" fontWeight="bold" ml={2}>
        CampusCompass
      </Typography>

      {/* Right-side Actions */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* User Avatar (Example: Replace with your user's avatar image) */}

        {/* Replace the onClick function with your actual menu functionality */}
        <IconButton  sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
