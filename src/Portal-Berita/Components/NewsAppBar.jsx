import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function NewsAppBar({ title = "News" }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
