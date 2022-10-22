<template>
  <burger :open="open" @onToggleMenu="handleToggleMenu" class="z-20"/>
  <a-drawer
    v-model:visible="open"
    class="custom-class"
    placement="right"
    :closable="false"
  >
    <span class="absolute right-5 top-10">
      <burger :open="open" @onToggleMenu="handleToggleMenu"/>
    </span>
    <nav>
      <ul :class="s.links">
        <li v-for="link in links" :key="link.name" @click="open = false">
          <nuxt-link class="w-full h-full block" :to="{ hash: `#${link.name}` }" :external="true">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </a-drawer>
</template>

<script setup lang="ts">
import Burger from './Burger.vue';
import {default as ADrawer} from 'ant-design-vue/lib/drawer/index.js'
import 'ant-design-vue/lib/drawer/style/index.css'
defineProps<{links}>()

let open = ref(false);
const handleToggleMenu = () => {
  open.value = !open.value;
}
</script>

<style module="s" lang="scss">
.links {
  overflow: scroll;
  padding-top: 5rem;
  & > li {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:active {
      background-color: #fafafa;
    }
    & a {
      padding: 1.5rem 0;
    }
  }
}
</style>
