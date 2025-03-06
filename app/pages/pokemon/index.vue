<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'
import type { Pokemon, PokemonDetails, PokemonResponse } from '~/domain/pokemon'

// States
const pokemon = ref<Pokemon[]>([])
const pokemonDetails = ref<OverviewItem[]>([])
const nextUrl = ref<string>('')
const isLoading = ref<boolean>(false)

// Fetch the initial list of Pokémon
async function initialLoad() {
  isLoading.value = true

  const { data: pokemonResponse } = await usePokemonData('pokemon') as { data: { value: PokemonResponse } }
  pokemon.value = pokemonResponse.value.results
  nextUrl.value = pokemonResponse.value.next.replace('https://pokeapi.co/api/v2/', '')

  pokemonDetails.value = await fetchPokemonDetails(pokemonResponse.value.results)
  isLoading.value = false
}

// Load more Pokémon
async function fetchNextPokemon() {
  isLoading.value = true

  const { data: pokemonResponse } = await usePokemonData(nextUrl.value) as { data: { value: PokemonResponse } }
  pokemon.value.push(...pokemonResponse.value.results)
  nextUrl.value = pokemonResponse.value.next.replace('https://pokeapi.co/api/v2/', '')

  const newPokemonDetails = await fetchPokemonDetails(pokemonResponse.value.results)
  pokemonDetails.value.push(...newPokemonDetails)

  isLoading.value = false
}

// Fetch Pokémon details
async function fetchPokemonDetails(pokemon: Pokemon[]) {
  const detailsPromises = pokemon.map(async (pokemon) => {
    const { data } = await usePokemonData(`pokemon/${pokemon.name}`) as { data: { value: PokemonDetails } }

    const pokemonDetails: OverviewItem = {
      id: data.value.id,
      name: pokemon.name,
      sprite: data.value.sprites.front_default,
    }
    return pokemonDetails
  })

  return await Promise.all(detailsPromises)
}

// Initialisation
initialLoad()
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-5xl' }">
      <ContentOverview title="Pokémon" :data="pokemonDetails" :is-loading="isLoading" :fetch-next-data="fetchNextPokemon" />
    </UContainer>
  </div>
</template>
