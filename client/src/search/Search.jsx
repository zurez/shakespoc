import React from "react";
import Grid from "@mui/material/Grid";
import SearchInput from "./components/SearchInput";

import { useFetchPokemon } from "../hooks/useFetchPokemon.hook";

const SearchResult = React.lazy(() => import("../search-result/SearchResult"));

export default function Search() {
  const { data, setPokemonName, error } = useFetchPokemon();

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
    </Grid>
  );
}
