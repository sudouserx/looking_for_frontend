import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Grid,
  ButtonBase,
  Divider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StairsIcon from "@mui/icons-material/Stairs";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useGlobalContext } from "../context";

const LabCard = ({ data }) => {
  const { handleLabReportBtn } = useGlobalContext();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleReportClick = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmReport = () => {
    handleLabReportBtn(data._id);
    setOpenConfirmation(false);
  };

  const handleCancelReport = () => {
    setOpenConfirmation(false);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 2,
        my: 2,
        mx: 1,
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        fontFamily="sans-serif"
        fontWeight="bold"
        gutterBottom
        align="center"
      >
        {data.labName}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1}>
            <CorporateFareIcon fontSize="small" />
            <Typography variant="body1" fontFamily="serif">
              {data.buildingName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <StairsIcon fontSize="small" />
            <Typography variant="body2" fontFamily="serif">
              Floor: {data.floorNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <MeetingRoomIcon fontSize="small" />
            <Typography variant="body2" fontFamily="serif">
              Room no: {data.roomNumber}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {data.landmark !== "None" && data.landmark !== "" && (
        <Box display="flex" my={2} alignItems="center" gap={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2" fontFamily="serif">
            Landmark: {data.landmark}
          </Typography>
        </Box>
      )}

      <Divider sx={{ my: 1.5 }} />

      {/* {!data.isReported && (
        <Box display="flex" justifyContent="flex-start">
          <ButtonBase onClick={handleReportClick}>
            <ReportGmailerrorredIcon fontSize="large" color="error" />
          </ButtonBase>
        </Box>
      )} */}

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
      >
        <DialogTitle>Confirm Report</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to report this lab?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelReport} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmReport}
            color="error"
            variant="contained"
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default LabCard;
