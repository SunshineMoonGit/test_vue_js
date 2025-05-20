<template>
  <HomeImage />

  <div class="container">
    <div class="section-spacing">
      <HomeServices />
    </div>
    <div class="section-spacing">
      <HomeCommunity />
    </div>
  </div>
</template>

<script setup>
import HomeImage from '@/components/home/HomeImage.vue';
import HomeServices from '@/components/home/HomeServices.vue';
import HomeCommunity from '@/components/home/HomeCommunity.vue';

</script>

<style scoped>
.section-spacing {
  margin: 3rem 0;
}
</style>