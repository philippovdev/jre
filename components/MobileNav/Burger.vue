<template>
  <div @click="$emit('onToggleMenu')" :class="[s.burger, { [s.open]: open }]">
    <div :class="s.bar"/>
    <div :class="s.bar"/>
    <div :class="s.bar"/>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open }>();
defineEmits(['onToggleMenu']);
</script>

<style module="s" lang="scss">
.burger {
  cursor: pointer;
}
.open {
  .bar {
    &:first-child {
      transform: rotate(45deg) translate(-1px, -3px);
    }

    &:nth-last-child(2) {
      opacity: 0;
    }

    &:last-child {
      transform: rotate(-45deg) translate(0, 1px);
    }
  }
}
.bar {
  background: #000;
  border-radius: 4px;
  height: 0.125rem;
  width: 2.5rem;
  transform-origin: 4px 0;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s ease,
  opacity 0.5s ease;

  &:not(:first-child) {
    margin-top: 0.625rem;
  }

  &:first-child {
    transform-origin: 0 0;
  }

  &:last-child {
    transform-origin: 0 100%;
  }
}
</style>
