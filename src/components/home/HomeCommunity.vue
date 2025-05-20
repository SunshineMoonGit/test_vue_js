<template>
  <h3 class="color-500">Community</h3>
  <!-- <div class="card mb-3"> -->
  <div class="row gx-5">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ issue.title }}</h5>
        <p class="card-text"><small class="text-body-secondary">{{ issue.subTitle }}</small></p>
        <p class="card-text">{{ issue.body }}</p>
      </div>
    </div>
    <div class="col-md-4">
      <img :src="signature" class="img-fluid rounded-start" alt="...">
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import signature from '@/assets/images/signature.png'

const issue = {
  title: 'Heading',
  subTitle: 'Subheading',
  body: 'Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.'
}

</script>

<style scoped></style>