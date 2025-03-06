<script setup lang="ts">
import type { ApiResponse } from '~/domain/api'
import type { OverviewItem } from '~/domain/content'
import type { RickAndMortyCharacter, RickAndMortyResponse } from '~/domain/rickandmorty'

// States
const characters = ref<OverviewItem[]>([])
const nextUrl = ref<string>('')
const isLoading = ref<boolean>(false)

// Fetch the initial list of characters
async function initialLoad() {
  fetchCharacters('character')
}

// Load more characters
async function loadMoreCharacters() {
  if (!nextUrl.value) {
    return
  }

  fetchCharacters(nextUrl.value)
}

// Fetch characters
async function fetchCharacters(url: string) {
  isLoading.value = true

  try {
    const { data: response } = await useRickAndMortyData(url) as ApiResponse<RickAndMortyResponse>
    const transformedData = transformRickAndMortyResponse(response.value.results)

    characters.value.push(...transformedData)
    nextUrl.value = response.value.info.next.replace('https://rickandmortyapi.com/api/', '')
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

// Transform Rick and Morty character data to be shown on the overview
function transformRickAndMortyResponse(characters: RickAndMortyCharacter[]): OverviewItem[] {
  const transformedData: OverviewItem[] = characters.map(character =>
    ({
      id: character.id,
      name: character.name,
      image: character.image,
      url: `/rickandmorty/${character.id}`,
    }))

  return transformedData
}

// Initialisation
initialLoad()
</script>

<template>
  <div class="py-8">
    <UContainer :ui="{ constrained: 'max-w-5xl' }">
      <ContentOverview title="Rick and Morty" :data="characters" :is-loading="isLoading" :fetch-next-data="loadMoreCharacters" />
    </UContainer>
  </div>
</template>
