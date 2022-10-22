<template>
  <div :class="['fixed', s.navWrapper]">
    <jre-container class="h-full flex items-center justify-between">
      <span :class="['h-full flex items-center', s.logo]">
        <span>J</span>
        <span>R</span>
        <span>E</span>
      </span>
      <nav class="flex items-center" v-if="!isMobile">
        <ul :class="s.navInner">
          <li :class="s.link" v-for="link in links">
            <nuxt-link :to="{ hash: `#${link.name}` }" :external="true">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nav v-else class="h-full items-center">
        <mobile-nav :links="links" />
      </nav>
    </jre-container>
  </div>
</template>

<script setup lang="ts">
import {JreContainer} from '@/components/JreContainer'
import {MobileNav} from '@/components/MobileNav'

let isMobile = ref(true);

const handleWindowResize = () => {
  isMobile.value = window.innerWidth <= 1024;
}
onMounted(() => {
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
})
const links = [
  {name: 'about-us', title: 'О Нас'},
  {name: 'services', title: 'Услуги'},
  {name: 'partnership', title: 'Партнерство'},
  {name: 'contacts', title: 'Контакты'},
]
</script>

<style module="s" lang="scss">
@import '@/assets/css/variables.scss';

.navWrapper {
  z-index: 10;
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  @apply w-full flex;
}

.logo {
  border: .0625rem solid black;
  padding: 1rem 2rem;

  & > span:not(:last-child) {
    margin-right: 1rem;
  }
}

.navInner {
  & > li:not(:last-child) {
    margin-right: 2rem;
  }

  @apply flex h-full items-center
}

.link {
  text-transform: uppercase;
  @apply h-full flex cursor-pointer items-center;
}

</style>
