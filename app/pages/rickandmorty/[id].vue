<script setup lang="ts">
import type { RickAndMortyDetailsRoute } from '~/domain/navigation'
import type { RickAndMortyCharacter } from '~/domain/rickandmorty'

const route = useRoute() as RickAndMortyDetailsRoute

const { data: response } = await useRickAndMortyData(`character/${route.params.id}`)
const character = response.value as RickAndMortyCharacter
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-3xl' }">
      <ContentDetailsRickAndMorty :data="character" />
    </UContainer>
  </div>
</template>
