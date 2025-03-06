<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/domain/rickandmorty'

const props = defineProps<{
  data: RickAndMortyCharacter
}>()
</script>

<template>
  <ContentDetails :name="props.data.name" :sprite="props.data.image">
    <div class="flex grow flex-col space-y-8 pr-20">
      <div class="flex flex-col flex-1 space-y-2">
        <span><strong>Character id:</strong> {{ props.data.id }}</span>
        <span><strong>Status:</strong> {{ props.data.status }}</span>
        <span><strong>Species:</strong> {{ props.data.species }}</span>
        <span v-if="props.data.type"><strong>Type:</strong> {{ props.data.type }}</span>
        <span><strong>Gender:</strong> {{ props.data.gender }}</span>
        <span><strong>Origin:</strong> {{ props.data.origin.name }}</span>
        <span><strong>Location:</strong> {{ props.data.location.name }}</span>
      </div>
    </div>
  </ContentDetails>
</template>
