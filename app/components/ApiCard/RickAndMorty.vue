<script setup>
import img1 from '~/assets/img/rick_morty_1.png'
import img2 from '~/assets/img/rick_morty_2.png'
import img3 from '~/assets/img/rick_morty_3.png'
import img4 from '~/assets/img/rick_morty_4.png'

const images = [img1, img2, img3, img4]
const randomImgIndex = Math.floor(Math.random() * 4)
const img = images[randomImgIndex]
</script>

<template>
  <ApiCard title="Rick and Morty" url="/rickandmorty">
    <ApiCardImage :src="img" alt="Rick and Morty" />
  </ApiCard>
</template>
