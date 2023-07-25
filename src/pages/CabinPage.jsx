import { useGlobalContext } from "../context";
import { Box, Divider } from "@mui/material";
import CabinCard from "../components/cabinCard";
import Search from "../components/search";

const CabinPage = () => {
  const { Cabins } = useGlobalContext();

  console.log(Cabins);
  return (
    <Box>
      <Search />
      <Divider sx={{ my: 2, color: "#fff" }} />

      {Cabins == undefined || Cabins.length == 0 ? (
        <p style={{ margin: "auto", textAlign: "center" }}>No content found </p>
      ) : (
        Cabins.map((cabin) => <CabinCard key={cabin._id} data={cabin} />)
      )}
    </Box>
  );
};

export default CabinPage;
