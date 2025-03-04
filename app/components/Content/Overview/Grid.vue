<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'

const props = defineProps<{
  data: OverviewItem[]
}>()
</script>

<template>
  <div class="p-4">
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="item in props.data" :key="item.name" class="flex flex-col items-center border border-zinc-600 p-4">
        <span class="capitalize font-medium text-gray-200">
          #{{ item.id }}: {{ item.name }}
        </span>

        <img :src="item.sprite" :alt="item.name">
      </li>
    </ul>
  </div>
</template>
