<template>
  <div id="carouselExampleSlidesOnly" class="my-5 carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

    <!-- 🔘 인디케이터 버튼 -->
    <div class="carousel-indicators">
      <button v-for="(image, idx) in images" :key="'indicator-' + idx" type="button"
        data-bs-target="#carouselExampleSlidesOnly" :data-bs-slide-to="idx" :class="{ active: idx === 0 }"
        :aria-current="idx === 0 ? 'true' : null" :aria-label="'Slide ' + (idx + 1)">
      </button>
    </div>

    <!-- 🖼️ 슬라이드 이미지 -->
    <div class="carousel-inner">
      <div v-for="(image, idx) in images" :key="'slide-' + idx" :class="['carousel-item', { active: idx === 0 }]">
        <img :src="image" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '@/assets/images/1.png'
import img2 from '@/assets/images/2.png'
import img3 from '@/assets/images/3.png'

const images = [img1, img2, img3]
</script>

<style lang="scss" scoped>
.carousel-indicators [data-bs-target] {
  background-color: $color-primary-500; // 선택 색상
}
</style>
