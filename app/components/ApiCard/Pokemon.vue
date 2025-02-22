<script setup>
import imgUrl from '~/assets/img/pokemon_1.png'
</script>

<template>
  <ApiCard title="Pokémon" url="/pokemon">
    <ApiCardImage :src="imgUrl" alt="Pokémon" />
  </ApiCard>
</template>
