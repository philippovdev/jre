<template>
  <client-only>
  <span class="flex justify-center">
    <component v-if="icon" width="60" height="60" :is="findIcon(icon)"/>
  </span>
  </client-only>
  <h3 class="text-center text-xl font-normal py-10">{{ title }}</h3>
  <p v-if="$slots.text" :class="s.text">
    <slot name="text"/>
  </p>
</template>

<script setup lang="ts">
import useIconsClient from '~/composables/useIcons.client';

defineProps<{ title: string, icon: string | unknown }>();
const { findIcon } = useIconsClient();
</script>

<style module="s" lang="scss">
.text {
  line-height: 1.8;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: center;
}
</style>
