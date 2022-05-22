import React from "react";
import Button from "@mui/material/Button";
export default function SearchButton({ onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      size="large"
      aria-label="find your pokemon"
    >
      Find your pokemon!
    </Button>
  );
}
