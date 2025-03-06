<script setup lang="ts">
import type { ApiResponse } from '~/domain/api'
import type { OverviewItem } from '~/domain/content'
import type { Pokemon, PokemonDetails, PokemonResponse } from '~/domain/pokemon'

// States
const pokemon = ref<OverviewItem[]>([])
const nextUrl = ref<string>('')
const isLoading = ref<boolean>(false)

// Fetch the initial list of Pokémon
async function initialLoad() {
  fetchPokemon('pokemon')
}

// Load more Pokémon
async function loadMorePokemon() {
  if (!nextUrl.value) {
    return
  }

  fetchPokemon(nextUrl.value)
}

// Fetch Pokémon
async function fetchPokemon(url: string) {
  isLoading.value = true

  try {
    const { data: pokemonResponse } = await usePokemonData(url) as ApiResponse<PokemonResponse>
    const pokemonDetails = await fetchPokemonDetails(pokemonResponse.value.results)

    pokemon.value.push(...pokemonDetails)
    nextUrl.value = pokemonResponse.value.next.replace('https://pokeapi.co/api/v2/', '')
  }
  catch (error) {
    // eslint-disable-next-line no-alert
    alert('Something went wrong. Please try again later.')
    console.error(error)
    isLoading.value = false
    return
  }
  finally {
    isLoading.value = false
  }
}

// Fetch Pokémon details
async function fetchPokemonDetails(pokemon: Pokemon[]) {
  const detailsPromises = pokemon.map(async (pokemon) => {
    const { data } = await usePokemonData(`pokemon/${pokemon.name}`) as ApiResponse<PokemonDetails>

    const pokemonDetails: OverviewItem = {
      id: data.value.id,
      name: `#${data.value.id}: ${pokemon.name}`, // Add Pokémon ID to the name
      sprite: data.value.sprites.front_default,
      url: `/pokemon/${data.value.name}`,
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
      <ContentOverview title="Pokémon" :data="pokemon" :is-loading="isLoading" :fetch-next-data="loadMorePokemon" />
    </UContainer>
  </div>
</template>
