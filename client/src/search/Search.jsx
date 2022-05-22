import React from "react";
import Grid from "@mui/material/Grid";
import SearchInput from "./components/SearchInput";

import { useFetchPokemon } from "../hooks/useFetchPokemon.hook";

const SearchResult = React.lazy(() => import("../search-result/SearchResult"));
const SearchProgress = React.lazy(() => import("./components/SearchProgress"));

export default function Search() {
  const { data, setPokemonName, error, loading } = useFetchPokemon();

  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent="center"
      alignItems="center"
    >
      {loading && (
        <Grid item>
          <SearchProgress />
        </Grid>
      )}
      {!loading && !data && (
        <Grid item>
          <SearchInput onClick={setPokemonName} />
        </Grid>
      )}
      {!loading && !!data && (
        <Grid item>
          <SearchResult
            {...data}
            reset={() => setPokemonName(null)}
            error={error}
            loading={loading}
          />
        </Grid>
      )}
    </Grid>
  );
}
