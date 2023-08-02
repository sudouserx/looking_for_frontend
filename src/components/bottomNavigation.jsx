import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import BiotechIcon from "@mui/icons-material/Biotech";
import BusinessIcon from "@mui/icons-material/Business";
import { useGlobalContext } from "../context";

const BottomNav = () => {
  const { bottomNavValue, setBottomNavValue } = useGlobalContext();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#2c3e50", // Set the background color
        borderTop: "1px solid #34495e", // Add a border on top
        zIndex: 10, // Ensure the navigation stays above other content
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={bottomNavValue}
        onChange={(event, newValue) => {
          setBottomNavValue(newValue);
        }}
        sx={{
          background:
            "linear-gradient(to right top, #141e30, #182539, #1c2c42, #20334b, #243b55)", // Set a gradient background
        }}
      >
        <BottomNavigationAction
          label="Labs"
          focusRipple
          sx={{
            color: "#ffffff", // Set the label text color to white
            "& .MuiSvgIcon-root": {
              fontSize: "2rem", // Increase icon size
            },
          }}
          icon={
            <BiotechIcon
              sx={{
                color: "#ffffff", // Set the icon color to white
              }}
            />
          }
        />
        <BottomNavigationAction
          label="Cabins"
          focusRipple
          sx={{
            color: "#ffffff", // Set the label text color to white
            "& .MuiSvgIcon-root": {
              fontSize: "2rem", // Increase icon size
            },
          }}
          icon={
            <BusinessIcon
              sx={{
                color: "#ffffff", // Set the icon color to white
              }}
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
