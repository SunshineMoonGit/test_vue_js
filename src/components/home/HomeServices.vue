<template>
  <h3 class="color-500">Services</h3>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="service in services" class="col">
      <div class="card" :class="service.bg">
        <div class="card-body m-3">
          <h5 class="card-title fw-bold">{{ service.type }}</h5>
          <p class="card-text">{{ service.desc }}</p>
          <a :href="service.path" class="fw-bold">바로가기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const services = [
  {
    type: '금융 챗봇',
    desc: '상냥한 느좋 남친 컨셉',
    path: '',
    bg: 'bg-500',
  },
  {
    type: '금융 챗봇',
    desc: '상냥한 즈후 걸푸란 컨셉',
    path: '',
    bg: 'bg-200',
  },
  {
    type: '새로운 컨텐츠',
    desc: '곧 찾아 옵니다.',
    path: '',
    bg: 'bg-500',
  },
]

</script>

<style lang="scss" scoped>
.card {
  border: 2px solid $color-primary-100;
  border-radius: 8px;
}
</style>