<script setup lang="ts">
const props = defineProps<{
  title: string
  url: string
}>()
</script>

<template>
  <NuxtLink :href="url">
    <section class="group rounded shadow shadow-slate-100 dark:shadow-slate-900 bg-slate-200 dark:bg-slate-800 border border-slate-500 dark:border-slate-600">
      <header class="border-b border-b-slate-200 dark:border-b-slate-600 p-4">
        <h2 class="text-center text-2xl font-bold tracking-wide text-slate-700 dark:text-slate-300">
          {{ props.title }}
        </h2>
      </header>
      <main class="flex justify-center p-4">
        <slot />
      </main>
    </section>
  </NuxtLink>
</template>
