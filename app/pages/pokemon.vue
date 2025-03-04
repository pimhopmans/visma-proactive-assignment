<script setup lang="ts">
// States
const pokemon = ref([])
const pokemonDetails = ref([])

// Fetch the list of Pokémon
const { data } = await usePokemonData('pokemon')
pokemon.value = data.value.results

// Fetch Pokémon details by name and save sprite url
const detailsPromises = pokemon.value.map(async (pokemon) => {
  const { data } = await usePokemonData(`pokemon/${pokemon.name}`)
  return {
    name: pokemon.name,
    sprite: data.value.sprites.front_default,
  }
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
