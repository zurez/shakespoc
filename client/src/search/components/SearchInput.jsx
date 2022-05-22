import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

import SearchButton from "./SearchButton";

export default function SearchInput({ onClick }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <FormControl>
      <InputLabel htmlFor="searchInput">eg: Pikachu</InputLabel>
      <Input
        id="searchInput"
        data-testid="searchInput"
        aria-describedby="Input for searching pokemon"
        fullWidth
        required={true}
        color={"info"}
        value={inputValue}
        onChange={(event) => setInputValue(event?.target?.value)}
      />
      <FormHelperText id="searchInputHelperText">
        <Typography variant="string" sx={{ fontSize: "0.5rem" }}>
          Press find your pokemon button after entering the pokemon name.
        </Typography>
      </FormHelperText>
      <SearchButton onClick={() => onClick(inputValue)} />
    </FormControl>
  );
}
