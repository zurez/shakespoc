import React, { useState, useEffect } from "react";
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

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onClick(inputValue);
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", handleEnter);

    return () => {
      window.removeEventListener("keyup", handleEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const SearchForm = (
    <FormControl>
      <InputLabel htmlFor="searchInput">eg: Pikachu</InputLabel>
      <Input
        id="searchInput"
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

  return <>{loading ? <SearchProgress /> : SearchForm}</>;
}
