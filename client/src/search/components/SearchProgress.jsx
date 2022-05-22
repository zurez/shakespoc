import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function SearchProgress() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <CircularProgress disableShrink color="warning" aria-label="loading" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          loading...
        </Typography>
      </Box>
    </Box>
  );
}
