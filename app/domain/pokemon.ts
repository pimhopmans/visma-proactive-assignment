export interface Pokemon {
  name: string
  url: string
}

export interface PokemonData {
  results: Pokemon[]
}

export interface PokemonDetails {
  sprites: {
    front_default: string
  }
}
