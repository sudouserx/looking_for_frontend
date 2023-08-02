import NavBar from "../components/navBar";
import { Box, Container } from "@mui/material";
import BottomNav from "../components/bottomNavigation";
import { useGlobalContext } from "../context";
import LabsPage from "./LabsPage";
import CabinsPage from "./CabinPage";

const HomePage = () => {
  const { bottomNavValue } = useGlobalContext();

  return (
    <main>
      <NavBar />
      <Container
        maxWidth="sm"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {bottomNavValue == 0 ? <LabsPage /> : <CabinsPage />}
        <Box sx={{ my: 10 }}></Box>
        <BottomNav />
      </Container>
    </main>
  );
};

export default HomePage;
