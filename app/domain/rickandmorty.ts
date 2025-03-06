export interface RickAndMortyResponse {
  info: {
    next: string
  }
  results: RickAndMortyCharacter[]
}

export interface RickAndMortyCharacter {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string }
  location: {
    name: string
  }
  image: string
}
