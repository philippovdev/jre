<template>
  <section :class="s.section">
    <jre-container>
      <slot name="title" v-if="$slots.title"/>
      <slot/>
    </jre-container>
  </section>
</template>

<style module="s" lang="scss">
.section {
  padding: 10rem 0;
}
</style>
