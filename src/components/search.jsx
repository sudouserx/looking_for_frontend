import { useGlobalContext } from "../context";

import { Box, TextField, Button, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";

const Search = () => {
  const {
    labSearchTerm,
    labSearchResults,
    handleLabSearchBtn,
    handleLabReportBtn,
    handleLabInputChange,
    handleLabSelectResult,
  } = useGlobalContext();

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
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
          label="Search"
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
          // autoFocus
        />
      </Box>
      <List>
        {labSearchResults
          ? labSearchResults.map((result) => (
              <ListItem
                disablePadding
                onClick={() => handleLabSelectResult(result._id)}
                key={result._id}
              >
                <ListItemButton>
                  <ListItemText primary={result.labName} />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
              </ListItem>
            ))
          : null}
      </List>
    </Box>
  );
};

export default Search;
