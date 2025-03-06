<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'

const props = defineProps<{
  data: OverviewItem[]
}>()
</script>

<template>
  <div class="p-4">
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="item in props.data" :key="item.name" class="border border-zinc-600">
        <NuxtLink :href="item.url" class="flex flex-col items-center p-4 hover:underline">
          <span class="capitalize font-medium text-gray-200 pb-2">
            {{ item.name }}
          </span>

          <img :src="item.sprite" :alt="item.name" width="144" height="144" class="rounded">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
