import { Injectable } from '@nestjs/common';
import {
  getPokemonDetails,
  getShakespearianTranslation,
} from './pokemon.helper';

@Injectable()
export class PokemonService {
  async findOne(pokemonName: string) {
    try {
      const pokemon = await getPokemonDetails(pokemonName);

      const shakespeareTranslation = await getShakespearianTranslation(
        pokemon.description,
      );

      return {
        ...pokemon,
        description: shakespeareTranslation,
        status: 'success',
      };
    } catch (error) {
      return { status: 'failure', message: error.message };
    }
  }
}
