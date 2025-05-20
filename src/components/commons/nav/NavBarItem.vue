<template>
  <li class="nav-item dropdown">
    <a class="color-500 nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      {{ menu.name }}
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
</template>

<script setup>
defineProps({
  menu: Object,
})
</script>

<style scoped></style>