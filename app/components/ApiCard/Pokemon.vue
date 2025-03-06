<script setup>
import img1 from '~/assets/img/pokemon_1.png'
import img2 from '~/assets/img/pokemon_2.png'
import img3 from '~/assets/img/pokemon_3.png'
import img4 from '~/assets/img/pokemon_4.png'

const images = [img1, img2, img3, img4]
const randomImgIndex = Math.floor(Math.random() * 4)
const img = images[randomImgIndex]
</script>

<template>
  <ApiCard title="Pokémon" url="/pokemon">
    <ApiCardImage :src="img" alt="Pokémon" />
  </ApiCard>
</template>
