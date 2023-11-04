import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField } from "@mui/material";

export default function SearchBar({ label, isLoading, callback }) {
  const [text, setText] = useState("");

  return (
    <Grid container sx={{ px: "1em", py: "1em" }}>
      <Grid item sm sx={{ pr: "1em" }}>
        <TextField
          id="outlined basic"
          label={label}
          variant="outlined"
          size="small"
          fullWidth
          disabled={isLoading}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Grid>
      <Grid item sm={1}>
        <Button
          variant="contained"
          disabledElevation
          fullWidth
          disabled={isLoading}
          onClick={() => {
            callback(text);
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

SearchBar.propType = {
  isLoading: PropTypes.bool,
};
