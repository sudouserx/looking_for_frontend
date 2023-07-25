import { useState } from "react";
import { useGlobalContext } from "../context";
import { Box, Divider, Button, Typography } from "@mui/material";
import LabCard from "../components/labCard";
import Search from "../components/search";
import FormDialog from "../components/inputEditLabForm";

const LabsPage = () => {
  const { Labs } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button fullWidth onClick={() => setOpen(true)}>
        <Typography variant="h6" fontFamily="sans-serif">
          Want to add a new lab ?
        </Typography>
      </Button>
      <Search />
      <Divider sx={{ my: 2, backgroundColor: "black" }} />

      {Labs == undefined ? (
        <p style={{ margin: "auto", textAlign: "center" }}>No content found </p>
      ) : (
        Labs.map((lab) => <LabCard key={lab._id} data={lab} />)
      )}
      <FormDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default LabsPage;
