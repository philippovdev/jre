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
</template>

<script setup>
import {HeroComponent} from "@/components/HeroComponent";
import {TheNavbar} from "@/components/TheNavbar";
import {InitialDescription} from "@/components/InitialDescription";
import {SectionComponent} from "@/components/SectionComponent";
import {AboutUs} from "@/components/AboutUs";
import {SuccessSecret} from "@/components/SuccessSecret";
</script>

<style module="s" lang="scss">
.darkenSection {
  background-color: #ededed;
}
</style>
