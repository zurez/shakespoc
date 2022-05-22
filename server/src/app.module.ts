import { CacheModule, Module } from '@nestjs/common';
import { PokemonClient } from 'pokenode-ts';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    PokemonModule,
    CacheModule.register({ isGlobal: true }),
    PokemonClient,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
