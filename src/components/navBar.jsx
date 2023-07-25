import { Box, Typography, Button, Avatar, ButtonBase } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
      <Typography variant="h5" fontFamily="sans-serif" color="white" m={2}>
         LOOKING FOR  ...
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <ButtonBase onClick={() => alert("hello")}>
        <MoreVertIcon
          sx={{
            color: "white",
          }}
        />
      </ButtonBase>
    </Box>
  );
};

export default NavBar;
