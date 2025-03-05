<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'

const props = defineProps<{
  data: OverviewItem[]
}>()

const route = useRoute()
</script>

<template>
  <div class="p-4">
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="item in props.data" :key="item.name" class="border border-zinc-600">
        <NuxtLink :href="`${route.fullPath}/${item.name}`" class="flex flex-col items-center p-4 hover:underline">
          <span class="capitalize font-medium text-gray-200">
            #{{ item.id }}: {{ item.name }}
          </span>

          <img :src="item.sprite" :alt="item.name">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
