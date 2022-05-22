import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
@UseInterceptors(CacheInterceptor)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  root() {
    return ``;
  }

  @Get('/:pokemonName')
  findOne(@Param('pokemonName') pokemonName: string) {
    return this.pokemonService.findOne(pokemonName.toLowerCase());
  }
}
