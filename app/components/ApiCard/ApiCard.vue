<script setup lang="ts">
const props = defineProps<{
  title: string
  url: string
}>()
</script>

<template>
  <NuxtLink :href="url">
    <div class="group flex flex-col h-[600px] rounded shadow shadow-slate-900 bg-slate-800 border border-slate-600">
      <header class="border-b border-b-gray-600 p-4">
        <h2 class="text-center text-2xl font-bold tracking-wide text-gray-200">
          {{ props.title }}
        </h2>
      </header>

      <slot />
    </div>
  </NuxtLink>
</template>
