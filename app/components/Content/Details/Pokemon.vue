<script setup lang="ts">
import type { PokemonData } from '~/domain/pokemon'

const props = defineProps<{
  data: PokemonData
}>()

// pick the last english flavor text
const englishFlavorTexts = props.data.flavor_text_entries.filter(entry => entry.language.name === 'en')
const flavorText = englishFlavorTexts[englishFlavorTexts.length - 1]?.flavor_text ?? 'No flavor text'

// find the visibile ability
const ability = props.data.abilities.find(ability => !ability.is_hidden)?.ability.name ?? 'None'

// join types
const types = props.data.types.map(type => type.type.name).join(', ')
</script>

<template>
  <ContentDetails :name="props.data.name" :sprite="props.data.sprites.front_default">
    <div class="flex grow flex-col space-y-8 pr-20">
      <h2 class="bg-zinc-700 rounded px-4 py-2">
        {{ flavorText }}
      </h2>

      <div class="flex justify-between px-2">
        <div class="flex flex-col flex-1 space-y-2">
          <span><strong>id:</strong> #{{ props.data.id }}</span>
          <span><strong>height:</strong> {{ props.data.height / 10 }}</span>
          <span><strong>weight:</strong> {{ props.data.weight / 10 }}</span>
          <span><strong>ability:</strong> {{ ability }}</span>
          <span><strong>types:</strong> {{ types }}</span>
        </div>

        <div class="flex flex-col flex-1 space-y-2">
          <span v-for="entry in props.data.stats" :key="entry.stat.name">
            <strong>{{ entry.stat.name }}:</strong> {{ entry.base_stat }}
          </span>
        </div>
      </div>
    </div>
  </ContentDetails>
</template>
