import React from "react";
import { useGlobalContext } from "../context";
import { Box, TextField, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";

const Labsearch = () => {
  const { labSearchResults, handleLabInputChange, handleLabSelectResult } =
    useGlobalContext();

  const showNoResults = !labSearchResults || labSearchResults.length === 0;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0, // Adjust this value if needed, depending on the layout
        zIndex: 999, // Set the z-index to make sure it stays on top of other content
        backgroundColor: "#fff", // Set the background color of the sticky element
        paddingBottom: 1
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center" // Center the search box vertically
        component="form"
        sx={{
          m: 1,
          pt: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search for Labs"
          variant="outlined"
          size="small"
          onChange={handleLabInputChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {showNoResults ? null : (
        <List sx={{ paddingTop: 0 }}>
          {labSearchResults.map((result) => (
            <React.Fragment key={result._id}>
              <ListItem
                disablePadding
                onClick={() => handleLabSelectResult(result._id)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f1f1f1", // Highlight on hover
                  },
                }}
              >
                <ListItemButton>
                  <ListItemText primary={result.labName} />
                </ListItemButton>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Labsearch;
