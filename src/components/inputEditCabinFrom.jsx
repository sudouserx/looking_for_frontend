import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useGlobalContext } from "../context";
import { Box, Grid } from "@mui/material";

export default function InputEditCabinForm({ open, handleClose }) {
  const { handleAddCabinFormSubmit } = useGlobalContext();
  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cabin = {
      nameOfStaff: data.get("nameOfStaff"),
      buildingName: data.get("buildingName"),
      floorNumber: data.get("floorNumber"),
      roomNumber: data.get("roomNumber"),
      landmark: data.get("landmark"),
    };
    const formErrors = {};
    if (!cabin.nameOfStaff) {
      formErrors.nameOfStaff = "Name of staff is required";
    }
    if (!cabin.buildingName) {
      formErrors.buildingName = "Building Name is required";
    }
    if (!cabin.floorNumber) {
      formErrors.floorNumber = "Floor Number is required";
    }
    if (!cabin.roomNumber) {
      formErrors.roomNumber = "Room Number is required";
    }

    if (Object.keys(formErrors).length > 0) {
      // Set errors and prevent form submission
      setErrors(formErrors);
    } else {
      // All required fields are filled, proceed with form submission
      handleClose();
      await handleAddCabinFormSubmit(cabin);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="nameOfStaff"
                required
                fullWidth
                id="nameOfStaff"
                label="Staff Name"
                autoFocus
                error={!!errors.nameOfStaff}
                helperText={errors.nameOfStaff}
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
