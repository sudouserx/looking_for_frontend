import NavBar from "../components/navBar";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Search from "../components/search";
import BottomNav from "../components/bottomNavigation";
import { useGlobalContext } from "../context";
import LabCard from "../components/labCard";
import LabsPage from "./LabsPage";
import CabinPage from "./CabinPage";
import FormDialog from "../components/inputEditLabForm";
import { useState } from "react";

const HomePage = () => {
  const { Labs, bottomNavValue } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <NavBar />
      <Container
        maxWidth="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Button fullWidth onClick={() => setOpen(true)}>
          <Typography
            variant="h6"
            component="h6"
            fontFamily="sans-serif"
            // color="linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)"
          >
            Contribute ?
          </Typography>
        </Button>
        {bottomNavValue == 0 ? <LabsPage /> : <CabinPage />}
        <Box sx={{ my: 10 }}></Box>
        <BottomNav />
        <FormDialog open={open} handleClose={handleClose} />
      </Container>
    </main>
  );
};

export default HomePage;
