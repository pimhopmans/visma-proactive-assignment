<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'

const props = defineProps<{
  data: OverviewItem[]
}>()

const route = useRoute()
</script>

<template>
  <div>
    <ul>
      <li v-for="item in props.data" :key="item.name" class="border-b border-zinc-600">
        <NuxtLink :href="`${route.fullPath}/${item.name}`" class="flex items-center space-x-4 px-6 py-4 hover:underline">
          <img :src="item.sprite" :alt="item.name" width="88" height="88" class="rounded-full">
          <span class="capitalize font-medium text-gray-200">
            {{ item.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
