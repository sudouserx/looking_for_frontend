import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { Box, Typography, Fab, Skeleton } from "@mui/material";
import CabinCard from "../components/cabinCard";
import Cabinsearch from "../components/cabinsearch";
import FormDialog from "../components/inputEditCabinFrom";
import AddIcon from "@mui/icons-material/Add";

const CabinsPage = () => {
  const { Cabins } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog
  const [loading, setLoading] = useState(true); // for loading state

  const handleOpenFormDialog = () => {
    setOpen(true);
  };

  const handleCloseFormDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Simulate fetching cabins from an API (remove this in your actual implementation)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      <Cabinsearch />

      {loading ? (
        // Show skeleton loading state while fetching cabins
        <>
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
        </>
      ) : Cabins === undefined || Cabins.length === 0 ? (
        // Improved condition for empty Cabins array
        <Typography
          variant="body1"
          fontFamily="sans-serif"
          fontWeight="bold"
          textAlign="center"
          mt={4}
          color="text.secondary"
        >
          No Cabins found
        </Typography>
      ) : (
        Cabins.filter((cabin) => cabin.isReported === false).map((cabin) => (
          <CabinCard key={cabin._id} data={cabin} />
        ))
      )}
      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenFormDialog}
        sx={{
          position: "fixed",
          bottom: 76,
          right: 20,
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>
      <FormDialog open={open} handleClose={handleCloseFormDialog} /> {/* Renamed handleClose */}
    </Box>
  );
};

export default CabinsPage;
