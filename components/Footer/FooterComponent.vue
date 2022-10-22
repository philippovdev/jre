<template>
  <p :class="s.text">Все права защищены © {{ year}}</p>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const year = currentYear === 2021 ? currentYear : `2021 - ${currentYear}`;
</script>

<style module="s" lang="scss">
.text {
  color: #564d24;
  text-align: center;
}
</style>
