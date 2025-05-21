<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <BottomFooter />
  </footer>
</template>

<script setup>
import NavBar from '@/components/commons/header/NavBar.vue';
import BottomFooter from '@/components/commons/footer/BottomFooter.vue';
import { RouterView, useRoute } from 'vue-router';




</script>

<style lang="scss" scoped></style>

<style lang="scss">
.color-100 {
  color: $color-primary-100;
}

.color-200 {
  color: $color-primary-200;
}

.color-300 {
  color: $color-primary-300;
}

.color-400 {
  color: $color-primary-400;
}

.color-500 {
  color: $color-primary-500;
}

.color-600 {
  color: $color-primary-600;
}

.color-700 {
  color: $color-primary-700;
}

.color-800 {
  color: $color-primary-800;
}

.color-900 {
  color: $color-primary-900;
}

.bg-100 {
  background-color: $color-primary-100;
}

.bg-200 {
  background-color: $color-primary-200;
}

.bg-300 {
  background-color: $color-primary-300;
}

.bg-400 {
  background-color: $color-primary-400;
}

.bg-500 {
  background-color: $color-primary-500;
}

.bg-600 {
  background-color: $color-primary-600;
}

.bg-700 {
  background-color: $color-primary-700;
}

.bg-800 {
  background-color: $color-primary-800;
}

.bg-900 {
  background-color: $color-primary-900;
}

a {
  text-decoration: none
}
</style>