import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, ButtonBase, Divider, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StairsIcon from "@mui/icons-material/Stairs";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FlagIcon from "@mui/icons-material/Flag";
import { useGlobalContext } from "../context";

const CabinCard = ({ data }) => {
  const { handleCabinReportBtn } = useGlobalContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      component={Paper}
      elevation={6}
      sx={{
        p: 2,
        mt: 5,
        mb: 5,
        background: "linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)",
      }}
      borderRadius="10px"
      // border={1}
      // borderColor={data.isReported ? "red" : "green"}
    >
      <Typography
        variant="h6"
        fontFamily="sans-serif"
        fontWeight="bold"
        gutterBottom
      >
        {data.nameOfStaff}
      </Typography>

      <Grid item container spacing={3}>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <CorporateFareIcon sx={{ mr: 1 }} />
              <Typography variant="body1" fontFamily="serif">
                Building
              </Typography>
            </Box>
            <Typography variant="body1" fontFamily="serif" gutterBottom ml={1}>
              {data.buildingName}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <StairsIcon sx={{ mr: 1 }} />
              <Typography variant="body1" fontFamily="serif">
                Floor
              </Typography>
            </Box>
            <Typography variant="body1" fontFamily="serif" gutterBottom ml={1}>
              {data.floorNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <MeetingRoomIcon sx={{ mr: 1 }} />
              <Typography variant="body1" fontFamily="serif">
                Room no
              </Typography>
            </Box>
            <Typography variant="body1" fontFamily="serif" gutterBottom ml={1}>
              {data.roomNumber}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Box display="flex" my={2}>
          <LocalOfferIcon sx={{ mr: 1 }} />
          <Typography variant="body1" fontFamily="serif">
            Benchmark
          </Typography>
        </Box>
        <Typography variant="body1" fontFamily="serif" gutterBottom ml={1}>
          {data.benchmark}
        </Typography>
      </Box>
      <Divider sx={{ my: 3 }} />
      {!data.isReported && (
        <Grid item container justifyContent="flex-end">
          <ButtonBase onClick={() => handleCabinReportBtn(data._id)}>
            <FlagIcon />
          </ButtonBase>
        </Grid>
      )}
      {/* <FormDialog /> */}
    </Box>
  );
};

export default CabinCard;
