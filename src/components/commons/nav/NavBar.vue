<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom">
    <div class="container justify-content-between align-items-center">

      <!-- 왼쪽 -->
      <a class="navbar-brand fw-bold color-500 me-4" href="#">MoneyUp</a>

      <!-- 가운데 메뉴 -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav gap-3">
          <NavBarItem v-for="menu in menus" :key="menu.name" :menu="menu" />
        </ul>
      </div>

      <!-- 오른쪽 유틸 -->
      <div class="d-flex align-items-center gap-3">
        <span class="color-500 d-flex align-items-center gap-1">
          <i class="bi bi-globe"></i>
          KO-KR
        </span>
        <button class="btn btn-sm rounded-pill bg-500 text-white px-3 py-2">가입하기</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavBarItem from './NavBarItem.vue';

const menus = [
  { name: '상품' },
  { name: '환율' },
  { name: '지도' },
  { name: '커뮤니티' },
]
</script>

<style lang="scss">
.color-500 {
  color: $color-primary-500;
}

.bg-500 {
  background-color: $color-primary-500;
}

.navbar {
  .navbar-brand {
    font-size: 1.5rem;
  }

  .navbar-nav .nav-link {
    font-weight: 500;
    font-size: 1.05rem;
    transition: all 0.2s ease;

    &:hover {
      color: $color-primary-400;
      border-bottom: 2px solid $color-primary-400;
    }
  }
}
</style>
