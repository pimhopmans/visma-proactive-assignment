<script setup lang="ts">
import type { PokemonDetailsRoute } from '~/domain/navigation'
import type { PokemonData, PokemonDetails, PokemonSpecies } from '~/domain/pokemon'

const route = useRoute() as PokemonDetailsRoute

const { data: details } = await usePokemonData(`pokemon/${route.params.name}`)
const pokemonDetails = details.value as PokemonDetails

const { data: species } = await usePokemonData(`pokemon-species/${route.params.name}`)
const pokemonSpecies = species.value as PokemonSpecies

const pokemon = {
  ...pokemonDetails,
  ...pokemonSpecies,
} as PokemonData
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-3xl' }">
      <ContentDetailsPokemon :data="pokemon" />
    </UContainer>
  </div>
</template>
