<template>
  <the-navbar/>
  <hero-component/>
  <section-component>
    <initial-description/>
  </section-component>
  <section-component :class="s.darkenSection">
    <template #title>
      <section-title title="О Нас"/>
    </template>
    <about-us/>
  </section-component>
  <section-component>
    <success-secret/>
  </section-component>
  <section-component :class="[s.darkenSection, s.short]">
    <proud-component/>
  </section-component>
  <section-component>
    <template #title>
      <section-title title="Контакты"/>
    </template>
    <contacts-component/>
  </section-component>
</template>

<script setup>
import {HeroComponent} from "@/components/HeroComponent";
import {TheNavbar} from "@/components/TheNavbar";
import {InitialDescription} from "@/components/InitialDescription";
import {SectionComponent} from "@/components/SectionComponent";
import {AboutUs} from "@/components/AboutUs";
import {SuccessSecret} from "@/components/SuccessSecret";
import {ProudComponent} from "@/components/ProudComponent";
import {ContactsComponent} from "@/components/ContactsComponent";
</script>

<style module="s" lang="scss">
.darkenSection {
  background-color: #ededed;
}

.short {
  padding: 7rem 0;
}
</style>
