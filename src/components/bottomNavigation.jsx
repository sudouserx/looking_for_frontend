import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { useState } from "react";
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
        backgroundColor: "blue",
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
            "linear-gradient(to right top, #141e30, #182539, #1c2c42, #20334b, #243b55)",
        }}
      >
        <BottomNavigationAction
          label="Labs"
          icon={
            <BiotechIcon
              sx={{
                color: "white",
              }}
            />
          }
        />
        <BottomNavigationAction
          label="Cabins"
          focusRipple

          icon={
            <BusinessIcon
              sx={{
                color: "white",
              }}
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
