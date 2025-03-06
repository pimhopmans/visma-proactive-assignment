<script setup lang="ts">
import type { OverviewItem } from '~/domain/content'
import OverviewGrid from '@/components/Content/Overview/Grid.vue'
import OverviewList from '@/components/Content/Overview/List.vue'
import { ref } from 'vue'

const props = defineProps<{
  title: string
  data: OverviewItem[]
  isLoading: boolean
  fetchNextData: () => void
}>()

const overviewType = ref('list') // default to list overview

const currentOverview = computed(() => {
  return overviewType.value === 'list' ? OverviewList : OverviewGrid
})
</script>

<template>
  <div class="border border-zinc-600 rounded">
    <div class="flex items-center justify-between bg-zinc-700 border-b border-b-zinc-600 p-4">
      <span class="font-medium text-xl text-gray-200">
        {{ props.title }}
      </span>

      <div class="border border-zinc-600 rounded font-medium text-base text-gray-200">
        <button
          class="border-r border-zinc-600 rounded py-2 px-4 hover:bg-zinc-400"
          :class="{ underline: overviewType === 'list' }"
          @click="overviewType = 'list'"
        >
          List
        </button>
        <button
          class="rounded py-2 px-4 hover:bg-zinc-400"
          :class="{ underline: overviewType === 'grid' }"
          @click="overviewType = 'grid'"
        >
          Grid
        </button>
      </div>
    </div>

    <component :is="currentOverview" :data="data" />

    <div class="h-20 flex justify-center items-center text-sm font-medium text-gray-200 p-4">
      <LoadingSpinner v-if="isLoading" />
      <button v-else class="hover:underline" @click="fetchNextData">
        Load more
      </button>
    </div>
  </div>
</template>
