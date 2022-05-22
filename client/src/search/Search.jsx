import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import SearchInput from "./components/SearchInput";

import { useFetchPokemon } from "../hooks/useFetchPokemon.hook";

const SearchResult = React.lazy(() => import("../search-result/SearchResult"));

export default function Search() {
  const { data, setPokemonName, error, loading } = useFetchPokemon();
  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent="center"
      alignItems="center"
    >
      {!(data || error) && (
        <Grid item>
          <SearchInput onClick={setPokemonName} loading={loading} />
        </Grid>
      )}
      {(data || error) && (
        <Grid item>
          <Suspense fallback={<p>loading result page...</p>}>
            <SearchResult
              {...data}
              reset={() => setPokemonName(null)}
              error={error}
              loading={loading}
            />
          </Suspense>
        </Grid>
      )}
    </Grid>
  );
}
