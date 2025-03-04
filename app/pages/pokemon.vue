<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'
import type { Pokemon, PokemonData, PokemonDetails } from '~/domain/pokemon'

// States
const pokemon = ref<Pokemon[]>([])
const pokemonDetails = ref<OverviewItem[]>([])

// Fetch the list of Pokémon
const { data } = await usePokemonData('pokemon') as { data: { value: PokemonData } }
pokemon.value = data.value.results

// Fetch Pokémon details by name and save sprite url
const detailsPromises = pokemon.value.map(async (pokemon) => {
  const { data } = await usePokemonData(`pokemon/${pokemon.name}`) as { data: { value: PokemonDetails } }

  const pokemonDetails: OverviewItem = {
    name: pokemon.name,
    sprite: data.value.sprites.front_default,
  }
  return pokemonDetails
})
pokemonDetails.value = await Promise.all(detailsPromises)
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-3xl' }">
      <ContentOverview title="Pokémon" :data="pokemonDetails" />
    </UContainer>
  </div>
</template>
