<template>
  <div :class="s.jreContainer">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style module="s" lang="scss">
.jreContainer {
  width: 100%;
  max-width: 75rem;
  padding: 0 1rem;
  margin: 0 auto;
}
</style>
