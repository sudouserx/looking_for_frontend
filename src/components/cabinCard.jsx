import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StairsIcon from "@mui/icons-material/Stairs";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const CabinCard = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      component={Paper}
      elevation={4}
      sx={{ p: 2, mt: 5, mb: 5 }}
    >
      <Typography variant="h6" gutterBottom>
        {data.fullName}
      </Typography>

      <Grid item container spacing={3}>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <CorporateFareIcon sx={{ mr: 1 }} />
              <Typography variant="body2" gutterBottom>
                Building
              </Typography>
            </Box>
            <Typography>{data.building}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <StairsIcon sx={{ mr: 1 }} />
              <Typography variant="body2" gutterBottom>
                Floor
              </Typography>
            </Box>
            <Typography>{data.floor}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Box display="flex" my={2}>
              <MeetingRoomIcon sx={{ mr: 1 }} />
              <Typography variant="body2" gutterBottom>
                Room no
              </Typography>
            </Box>
            <Typography>₹ {data.roomNo} /month</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Box display="flex" my={2}>
          <LocalOfferIcon sx={{ mr: 1 }} />
          <Typography variant="body1" gutterBottom>
            {data.benchmark}
          </Typography>
        </Box>
        <Typography>{data.benchmark}</Typography>
      </Box>
    </Box>
  );
};


export default CabinCard;