<script setup lang="ts">
const props = defineProps<{
  name: string
  sprite: string
}>()

const router = useRouter()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div>
      <button class="text-gray-200 hover:underline" @click="router.back()">
        &lt; Back
      </button>
    </div>

    <h1 class="capitalize text-3xl font-medium text-gray-200">
      {{ props.name }}
    </h1>

    <div class="flex justify-between">
      <slot />

      <div>
        <img class="bg-zinc-700 rounded" :src="props.sprite" :alt="props.name" width="200" height="200">
      </div>
    </div>
  </div>
</template>
