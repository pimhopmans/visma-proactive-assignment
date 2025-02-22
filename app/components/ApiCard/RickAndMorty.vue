<script setup>
import imgUrl from '~/assets/img/rick_morty_1.png'
</script>

<template>
  <ApiCard title="Rick and Morty" url="/rickandmorty">
    <ApiCardImage :src="imgUrl" alt="Rick and Morty" />
  </ApiCard>
</template>
