import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

const SearchButton = React.lazy(() => import("./SearchButton"));
const SearchProgress = React.lazy(() => import("./SearchProgress"));

export default function SearchInput({ onClick, loading }) {
  const [inputValue, setInputValue] = useState("");

  const SearchForm = (
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

  console.log({ loading });
  return <>{loading ? <SearchProgress /> : SearchForm}</>;
}
