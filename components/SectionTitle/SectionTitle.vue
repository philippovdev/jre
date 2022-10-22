<template>
  <div :class="s.titleWrapper">
    <h2 :class="s.title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";

defineProps<{ title: string, small?: boolean }>()
</script>

<style module="s" lang="scss">
.titleWrapper {
  display: flex;
  justify-content: center;
}
.title {
  text-align: center;
  display: flex;
  font-size: v-bind("small ? '1.5rem' : '2.8rem'");
  font-weight: 200;
  height: 3rem;
  width: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    font-size: v-bind("small ? '2.5rem' : '4rem'");
  }

  &:after, &:before {
    content: '';
    height: .0625rem;
    position: absolute;
    width: .5rem;
    background-color: #000;
  }

  &:before {
    left: v-bind("small ? 0 : '-2rem'");
  }

  &:after {
    right: v-bind("small ? 0 : '-2rem'");
  }
}
</style>
