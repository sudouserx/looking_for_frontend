import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Box, Divider, Button, Typography } from "@mui/material";
import LabCard from "../components/labCard"; // Use LabCard component instead
import Cabinsearch from "../components/search"; // Use Cabinsearch component instead
import FormDialog from "../components/inputEditLabForm"; // Use FormDialog component instead

const CabinsPage = () => {
  const { Cabins } = useGlobalContext();
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
          Add a New Staff Cabin
        </Typography>
      </Button>
      <Cabinsearch />

      {Cabins === undefined || Cabins.length === 0 ? ( // Improved condition for empty Cabins array
        <Typography
          variant="body1"
          fontFamily="sans-serif"
          fontWeight="bold"
          textAlign="center"
          mt={4}
          color="text.secondary"
        >
          No content found
        </Typography>
      ) : (
        Cabins.map((cabin) => <LabCard key={cabin._id} data={cabin} />) // Use LabCard component
      )}
      <FormDialog open={open} handleClose={handleCloseFormDialog} /> {/* Renamed handleClose */}
    </Box>
  );
};

export default CabinsPage;
