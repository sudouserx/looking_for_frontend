import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { Box,Typography, Fab, Skeleton } from "@mui/material";
import LabCard from "../components/labCard";
import Labsearch from "../components/labsearch";
import FormDialog from "../components/inputEditLabForm";
import AddIcon from "@mui/icons-material/Add";

const LabsPage = () => {
  const { Labs } = useGlobalContext();
  const [open, setOpen] = useState(false); // for form dialog
  const [loading, setLoading] = useState(true);

  const handleOpenFormDialog = () => {
    setOpen(true);
  };

  const handleCloseFormDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Simulate fetching labs from an API (remove this in your actual implementation)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      <Labsearch />
      {loading ? (
        // Show skeleton loading state while fetching labs
        <>
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
        </>
      ) : Labs === undefined || Labs.length === 0 ? (
        // Improved condition for empty Labs array
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
        Labs.filter((lab) => lab.isReported === false).map((lab) => (
          <LabCard key={lab._id} data={lab} />
        ))
      )}
      {/* Floating Action Button */}
      <Fab
        color="secondary"
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
      <FormDialog open={open} handleClose={handleCloseFormDialog} />
    </Box>
  );
};

export default LabsPage;
