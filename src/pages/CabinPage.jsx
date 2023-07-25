import { useState } from "react";
import { useGlobalContext } from "../context";
import { Box, Divider, Button, Typography } from "@mui/material";
import CabinCard from "../components/cabinCard";
import Search from "../components/search";
import FormDialog from "../components/inputEditCabinFrom";

const CabinsPage = () => {
  const { Cabins } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button fullWidth onClick={() => setOpen(true)}>
        <Typography variant="h6" component="h6" fontFamily="sans-serif">
          Contribute ?
        </Typography>
      </Button>
      <Search />
      <Divider sx={{ my: 2, backgroundColor: "black" }} />

      {Cabins == undefined ? (
        <p style={{ margin: "auto", textAlign: "center" }}>No content found </p>
      ) : (
        Cabins.map((cabin) => <CabinCard key={cabin._id} data={cabin} />)
      )}
      <FormDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default CabinsPage;
