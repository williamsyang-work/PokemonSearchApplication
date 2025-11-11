export interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    sprite: string;
    stats: {
      name: string;
      value: number;
    }[];
    abilities: string[];
  }