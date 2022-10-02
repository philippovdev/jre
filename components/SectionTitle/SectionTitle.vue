<template>
  <div :class="s.titleWrapper">
    <h2 :class="s.title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style module="s" lang="scss">
.titleWrapper {
  display: flex;
  justify-content: center;
}
.title {
  text-align: center;
  display: flex;
  font-size: 2.8rem;
  font-weight: 200;
  height: 3rem;
  width: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  &:after, &:before {
    content: '';
    height: .0625rem;
    position: absolute;
    width: .5rem;
    background-color: #000;
  }

  &:before {
    left: -2rem;
  }

  &:after {
    right: -2rem;
  }
}
</style>
