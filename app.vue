<template>
  <the-navbar/>
  <hero-component/>
  <section-component>
    <initial-description/>
  </section-component>
  <section-component :class="s.darkenSection" id="about-us">
    <template #title>
      <section-title title="О Нас"/>
    </template>
    <about-us/>
  </section-component>
  <section-component>
    <success-secret/>
  </section-component>
  <section-component :class="s.bright" id="services">
    <template #title>
      <section-title title="Наши Услуги"/>
    </template>
    <our-services />
  </section-component>
  <section-component :class="s.short">
    <template #title>
      <section-title small title="В процессе работы мы оказываем следующие услуги:"/>
    </template>
    <additional-services />
  </section-component>
  <section-component :class="[s.darkenSection, s.short]">
    <proud-component/>
  </section-component>
  <section-component id="contacts">
    <template #title>
      <section-title title="Контакты"/>
    </template>
    <contacts-component/>
  </section-component>
  <section-component :class="s.darkenSection" id="partnership">
    <template #title>
      <section-title title="Партнерство"/>
    </template>
    <partnership-component/>
  </section-component>
  <section-component :class="[s.footer, s.short]">
    <footer-component />
  </section-component>
</template>

<script setup>
import {HeroComponent} from "@/components/HeroComponent";
import {TheNavbar} from "@/components/TheNavbar";
import {SectionComponent} from "@/components/SectionComponent";
</script>

<style module="s" lang="scss">
.darkenSection {
  background-color: #ededed;
}

.short {
  padding: 5rem 0;
}
.bright {
  background: rgb(125,161,126);
  background: linear-gradient(349deg, rgba(125,161,126,1) 17%, rgba(200,235,201,1) 54%);
}
.footer {
  background-color: #2d2d2d;
}
</style>
