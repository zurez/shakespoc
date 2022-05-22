import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SearchInput from "./components/SearchInput";
import SearchResult from "../search-result/SearchResult";
import { useFetchPokemon } from "../hooks/useFetchPokemon.hook";
import { Snackbar } from "@mui/material";

export default function Search() {
  const { loading, data, setPokemonName, error } = useFetchPokemon();
  console.log({ data });
  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent="center"
      alignItems="center"
    >
      {!data && (
        <Grid item>
          <SearchInput onClick={setPokemonName} />
        </Grid>
      )}
      {!!data && (
        <Grid item>
          <SearchResult {...data} reset={() => setPokemonName(null)} />
        </Grid>
      )}
      <Snackbar open={!!error} autoHideDuration={6000} message={error} />
    </Grid>
  );
}
