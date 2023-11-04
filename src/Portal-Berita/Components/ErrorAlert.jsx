import { Alert, AlertTitle } from "@mui/material";

import React from "react";

export default function ErrorAlert({ msg }) {
  return (
    <Alert severity="error" sx={{ mx: "1em", my: "1em" }}>
      <AlertTitle>Oooops...</AlertTitle>
      {msg}
    </Alert>
  );
}
