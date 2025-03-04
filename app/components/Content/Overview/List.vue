<script setup lang="ts">
const props = defineProps<{
  data: unknown
}>()
</script>

<template>
  <div class="">
    <ul>
      <li v-for="item in props.data" :key="item.name" class="flex items-center space-x-4 [&:not(:last-child)]:border-b border-zinc-600 px-4 py-1">
        <img :src="item.sprite" :alt="props.name">
        <span class="capitalize font-medium text-gray-200">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
