import { useEffect, useState } from "react";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);
const controller = new AbortController();

export function useFetchPokemon() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  useEffect(() => {
    if (!pokemonName) {
      setData(null);
      setError(null);
      setLoading(false);
      setPokemonName(null);
      return;
    }

    if (pokemonName.length < 3) {
      setError("Name must be more than 3 characters");
      return;
    }
    const url = `${process.env.REACT_APP_SERVER_URL}/pokemon/${pokemonName
      .toLowerCase()
      .trim()}`;

    const fetchApi = async () => {
      setLoading(true);
      try {
        const resp = await axios.get(url);
        if (resp?.data?.status === "success") {
          setData(resp.data);
        } else {
          throw new Error(resp?.data?.message);
        }
      } catch (error) {
        if (error.message.includes("429")) {
          setError(
            "Too many search request done. Please wait for an hour to try again"
          );
        } else {
          setError(
            "The pokemon is not available in our records. Please retry with a different name."
          );
        }
      }

      setLoading(false);
    };

    fetchApi();

    return () => {
      controller.abort();
    };
  }, [pokemonName]);

  return {
    loading,
    data,
    error,
    setPokemonName,
  };
}
