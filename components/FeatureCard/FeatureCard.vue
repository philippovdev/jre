<template>
  <span class="flex justify-center">
    <component width="60" height="60" :is="findIcon(icon)"/>
  </span>
  <h3 class="text-center text-xl font-normal py-10">{{ title }}</h3>
  <p v-if="$slots.text" :class="s.text">
    <slot name="text"/>
  </p>
</template>

<script setup lang="ts">
import useIcons from '@/composables/useIcons';

const props = defineProps<{ title: string, icon: string }>();
const {findIcon} = useIcons();
</script>

<style module="s" lang="scss">
.text {
  line-height: 1.8;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: center;
}
</style>
