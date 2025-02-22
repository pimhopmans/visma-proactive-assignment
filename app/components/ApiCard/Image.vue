<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <pre class="flex justify-center">
    <img
        class="object-contain max-w-sm transition-all duration-300 filter grayscale group-hover:grayscale-0"
        :src="props.src"
        :alt="props.alt"
    >
  </pre>
</template>
