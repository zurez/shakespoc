import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { PokemonClient, PokemonSpecies } from 'pokenode-ts';
const pokemonClient = new PokemonClient();
const axios = setupCache(Axios, { ttl: 3600 * 1000 });
export async function getPokemonDetails(pokemonName) {
  const pokemon: PokemonSpecies = await pokemonClient.getPokemonSpeciesByName(
    pokemonName,
  );

  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  let description = `No description found for the pokemon ${pokemonName}`;

  const flavorTexts = pokemon.flavor_text_entries;

  for (let i = 0; i < flavorTexts.length; i++) {
    const entry = flavorTexts[i];
    if (entry?.language?.name === 'en') {
      description = entry.flavor_text;
      break;
    }
  }
  return {
    name: pokemonName,
    sprite,
    description,
  };
}

export async function getShakespearianTranslation(text: string) {
  const fm = text.replace(/[^a-zA-Z0-9,;\-.!? ]/g, ' ');
  const url = `https://api.funtranslations.com/translate/shakespeare.json`;

  const resp = await axios.get(url, { params: { text: fm } });

  return resp?.data?.contents?.translated;
}
