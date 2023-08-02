import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Splash = () => {
  const [loaded, setLoaded] = useState(false);
  const fadeIn = useSpring({ opacity: loaded ? 0 : 1, from: { opacity: 1 } });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5", // A light gray background color
      }}
    >
      <img
        src="/logo-no-background.png" // Replace with your logo with background
        alt="Logo"
        style={{ width: 120, height: 120, marginBottom: 24, borderRadius: "50%" }}
      />
      <CircularProgress size={60} thickness={4} style={{ color: "#00acc1" }} /> {/* A teal color */}
      <Typography variant="h6" style={{ marginTop: 16, color: "#333" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Splash;
