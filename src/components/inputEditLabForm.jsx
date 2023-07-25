import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useGlobalContext } from "../context";
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

export default function FormDialog({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
}) {
  const { handleAddLabFormSubmit } = useGlobalContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lab = {
      buildingName: data.get("buildingName"),
      labName: data.get("labName"),
      floorNumber: data.get("floorNumber"),
      roomNumber: data.get("roomNumber"),
      benchmark: data.get("benchmark"),
    };

    handleClose();
    await handleAddLabFormSubmit(lab);
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="buildingName"
                label="Building Name"
                name="buildingName"
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="benchmark"
                label="Benchmark"
                id="benchmark"
                placeholder="If applicable"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Contribute
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
