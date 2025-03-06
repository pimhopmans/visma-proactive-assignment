export interface PokemonResponse {
  next: string
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export type PokemonData = PokemonDetails & PokemonSpecies

export interface PokemonDetails {
  id: number
  name: string
  height: number
  weight: number
  abilities: PokemonAbility[]
  sprites: {
    front_default: string
  }
  stats: PokemonStat[]
  types: PokemonType[]
}

export interface PokemonSpecies {
  id: number
  flavor_text_entries: PokemonFlavorText[]
}

interface PokemonAbility {
  ability: {
    name: string
  }
  is_hidden: boolean
}

interface PokemonStat {
  base_stat: number
  stat: {
    name: string
  }
}

interface PokemonType {
  type: {
    name: string
  }
}

interface PokemonFlavorText {
  flavor_text: string
  language: {
    name: string
  }
}
