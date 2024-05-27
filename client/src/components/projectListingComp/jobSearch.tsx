import { SearchOutlined, PinDropOutlined } from "@mui/icons-material";
import {
  TextField,
  Button,
  Grid,
  styled,
  Box,
  InputAdornment,
} from "@mui/material";
import { FC } from "react";

const JobSearchMain = styled(Box)(({ theme }: any) => ({
  width: "100%",
  flexGrow: 1,
  padding: theme.spacing(2),
  "& .classInputField": {
    "&:not(:last-child)": {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
  "& button": {
    borderRadius: "unset",
    margin: "unset",
    backgroundColor: theme.palette.common.headingLinesGreen,
    height: "57.6px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.common.headingLinesGreen,
      border: "none",
      boxShadow: "none",
    },
  },
  "& .MuiInputBase-formControl": {
    margin: "unset",
  },
  "& .MuiTextField-root": {
    border: "1px solid rgba(20, 20, 20, 0.1)",
    "& fieldset": {
      display: "none",
    },
  },
}));

const JobSearch: FC = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  return (
    <JobSearchMain>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <TextField
            className={"classInputField"}
            variant="outlined"
            size="medium"
            fullWidth
            inputProps={{ placeholder: "What position are you looking for ?" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={"classInputField"}
            variant="outlined"
            size="medium"
            fullWidth
            inputProps={{ placeholder: "Location" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PinDropOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="button" variant="contained" onClick={handleSearch}>
            Search Jobs
          </Button>
        </Grid>
      </Grid>
    </JobSearchMain>
  );
};

export default JobSearch;
