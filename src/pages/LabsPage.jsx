import { useGlobalContext } from "../context";
import { Box, Divider } from "@mui/material";
import LabCard from "../components/labCard";
import Search from "../components/search";

const LabsPage = () => {
  const { Labs } = useGlobalContext();

  return (
    <Box>
      <Search />
      <Divider sx={{ my: 2, backgroundColor: "black" }} />

      {Labs == undefined ? (
        <p style={{ margin: "auto", textAlign: "center" }}>No content found </p>
      ) : (
        Labs.map((lab) => <LabCard key={lab._id} data={lab} />)
      )}
    </Box>
  );
};

export default LabsPage;
