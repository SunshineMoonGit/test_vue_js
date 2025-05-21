<template>
  <div>
    <label>시/도 선택</label>
    <select v-model="selectedRegion" class="form-select" aria-label="Default select example">
      <option disabled value="">-- 선택 --</option>
      <option v-for="region in regions.mapInfo" :key="region.name" :value="region.name">{{ region.name }}</option>
    </select>

    <label>시/군/구 선택</label>
    <select v-model="selectedSubregion" class="form-select" aria-label="시군구 선택">
      <option disabled value="">-- 선택 --</option>
      <option v-for="subregion in subregions" :key="subregion" :value="subregion">
        {{ subregion }}
      </option>
    </select>

    <label>은행 선택</label>
    <select v-model="selectedBank" class="form-select" aria-label="Default select example">
      <option disabled value="">-- 선택 --</option>
      <option v-for="bank in banks" :key="bank">{{ bank }}</option>
    </select>
  </div>
</template>

<script setup>
import regions from '@/assets/datas/korea_data.json'
import { ref, computed, onMounted } from 'vue'

const data = ref([])
const selectedRegion = ref('')
const selectedSubregion = ref('')
const selectedBank = ref('')

const subregions = computed(() => {
  const region = regions.mapInfo.find(r => r.name === selectedRegion.value)
  return region ? region.countries : []
})

const banks = [
  'KB국민은행',
  '하나은행',
  '신한은행',
  '우리은행',
  'IBK기업은행',
  'NH농협은행',
  'KDB산업은행',
  'SC제일은행',
  'BNK부산은행',
  'iM뱅크',
  '카카오뱅크',
  '수협은행',
  'BNK경남은행',
  '한국씨티은행',
  '케이뱅크',
  '광주은행',
  '토스뱅크',
  '전북은행',
  '제주은행',
]

</script>

<style scoped></style>