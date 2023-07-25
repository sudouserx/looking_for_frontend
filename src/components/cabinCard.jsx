import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, ButtonBase, Divider, Typography, Badge } from "@mui/material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StairsIcon from "@mui/icons-material/Stairs";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useGlobalContext } from "../context";

const CabinCard = ({ data }) => {
  const { handleCabinReportBtn } = useGlobalContext();

  return (
    <Paper
      elevation={6}
      sx={{
        p: 2,
        my: 2,
        mx: 1,
        background:
          "linear-gradient(to right bottom, #f7f8fc, #e2e8f0, #d3dce5, #cad4d5, #cad4d5)", // New background gradient
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
        {data.nameOfStaff}
      </Typography>

      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={4} sm={4} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CorporateFareIcon fontSize="large" />
            <Typography variant="body2" fontFamily="serif">
              Building
            </Typography>
            <Typography variant="subtitle2" fontFamily="serif">
              {data.buildingName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <StairsIcon fontSize="large" />
            <Typography variant="body2" fontFamily="serif">
              Floor
            </Typography>
            <Typography variant="subtitle2" fontFamily="serif">
              {data.floorNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <MeetingRoomIcon fontSize="large" />
            <Typography variant="body2" fontFamily="serif">
              Room no
            </Typography>
            <Typography variant="subtitle2" fontFamily="serif">
              {data.roomNumber}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Box display="flex" my={2}>
          <LocalOfferIcon fontSize="large" />
          <Typography variant="body2" fontFamily="serif">
            Benchmark
          </Typography>
        </Box>
        <Typography variant="body2" fontFamily="serif" ml={1}>
          {data.benchmark}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {data.isReported ? (
        <Box display="flex" justifyContent="center">
          <Badge color="error" badgeContent="Reported">
            <Typography variant="body2" fontFamily="serif" mt={1}>
              Reported
            </Typography>
          </Badge>
        </Box>
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <ButtonBase onClick={() => handleCabinReportBtn(data._id)}>
            <ReportGmailerrorredIcon fontSize="large" color="error" />
          </ButtonBase>
        </Box>
      )}
    </Paper>
  );
};

export default CabinCard;
