<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="flex flex-1 max-h-[90%] items-center justify-center">
    <img
      class="object-contain max-w-sm max-h-full transition-all duration-300 filter grayscale group-hover:grayscale-0"
      :src="props.src"
      :alt="props.alt"
    >
  </div>
</template>
