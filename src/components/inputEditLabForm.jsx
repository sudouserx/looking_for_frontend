import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useGlobalContext } from "../context";
import { Box, Grid, Typography } from "@mui/material";

export default function LabFormDialog({ open, handleClose }) {
  const { handleAddLabFormSubmit } = useGlobalContext();
  const [errors, setErrors] = React.useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lab = {
      buildingName: data.get("buildingName"),
      labName: data.get("labName"),
      floorNumber: data.get("floorNumber"),
      roomNumber: data.get("roomNumber"),
      landmark: data.get("landmark"),
    };

    // Validate required fields
    const formErrors = {};
    if (!lab.labName) {
      formErrors.labName = "Lab Name is required";
    }
    if (!lab.buildingName) {
      formErrors.buildingName = "Building Name is required";
    }
    if (!lab.floorNumber) {
      formErrors.floorNumber = "Floor Number is required";
    }
    if (!lab.roomNumber) {
      formErrors.roomNumber = "Room Number is required";
    }

    if (Object.keys(formErrors).length > 0) {
      // Set errors and prevent form submission
      setErrors(formErrors);
    } else {
      // All required fields are filled, proceed with form submission
      handleClose();
      await handleAddLabFormSubmit(lab);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="labName"
                required
                fullWidth
                id="labName"
                label="Lab Name"
                autoFocus
                error={!!errors.labName}
                helperText={errors.labName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="buildingName"
                label="Building Name"
                name="buildingName"
                error={!!errors.buildingName}
                helperText={errors.buildingName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="floorNumber"
                label="Floor Number"
                name="floorNumber"
                type="number"
                error={!!errors.floorNumber}
                helperText={errors.floorNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="roomNumber"
                label="Room Number"
                id="roomNumber"
                type="number"
                error={!!errors.roomNumber}
                helperText={errors.roomNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="landmark"
                label="Landmark (If applicable)"
                id="landmark"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
