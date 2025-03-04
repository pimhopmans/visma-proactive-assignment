<script setup lang="ts">
const { data } = usePokemonData('pokemon')
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-3xl' }">
      <ContentOverview title="Pokémon" :data="data" />
    </UContainer>
  </div>
</template>
