import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Box, Divider, Button, Typography } from "@mui/material";
import LabCard from "../components/labCard";
import Labsearch from "../components/search";
import FormDialog from "../components/inputEditLabForm";

const LabsPage = () => {
  const { Labs } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog

  const handleOpenFormDialog = () => {
    setOpen(true);
  };

  const handleCloseFormDialog = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        fullWidth
        variant="outlined" // Use outlined style for the button
        color="primary" // Use primary color for the button
        onClick={handleOpenFormDialog} // Renamed to handleOpenFormDialog
        sx={{
          marginTop: 2,
          borderRadius: 5,
        }}
      >
        <Typography variant="body1" fontFamily="sans-serif" fontWeight="bold">
          Add a New Lab
        </Typography>
      </Button>
      <Labsearch />

      {Labs === undefined || Labs.length === 0 ? ( // Improved condition for empty Labs array
        <Typography
          variant="body1"
          fontFamily="sans-serif"
          fontWeight="bold"
          textAlign="center"
          mt={4}
          color="text.secondary"
        >
          No Labs found
        </Typography>
      ) : (
        Labs.map((lab) => <LabCard key={lab._id} data={lab} />)
      )}
      <FormDialog open={open} handleClose={handleCloseFormDialog} /> {/* Renamed handleClose */}
    </Box>
  );
};

export default LabsPage;
