<template>
  <h3 :class="s.title" class="text-center">Мы всегда рады вашим обращениям!</h3>
  <ul :class="s.text">
    <li>Мы всегда на связи! Звоните и пишите.</li>
    <li>Прежде чем на что-то решиться — проконсультируйтесь, узнайте детали.</li>
    <li>Вы можете получить профессиональную консультацию абсолютно бесплатно, это ни к чему Вас не обязывает в будущем.</li>
    <li>Гарантия конфиденциальности по любым обращениям.</li>
  </ul>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10">
    <a target="_blank" :href="contact.link" v-for="contact in contacts" :key="contact.title" class="mb-5 sm:mb-0">
      <div class="flex flex-col items-center cursor-pointer">
        <div class="flex justify-center items-center w-16 h-16 rounded-full bg-gray-100">
          <component v-if="contact.icon" width="30" :is="findIcon(contact.icon)" />
        </div>
        <div class="text-center mt-2">
          <h4 class="text-lg font-bold">{{ contact.title }}</h4>
          <p class="text-gray-500">{{ contact.text }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import useIconsClient from "~/composables/useIcons.client";

const contacts = [
  { title: 'Телефон', text: '+7 (499) 399-366-5', value: '+74993993665', icon: 'phone', link: 'tel:+74993993665' },
  { title: 'WhatsApp', text: '+7 (926) 910-46-46', value: '+79269104646', icon: 'whatsapp', link: 'https://wa.me/79269104646' },
  { title: 'Telegram', text: '+7 (926) 910-46-46', value: '+79269104646', icon: 'telegram', link: 'https://telegram.me/+79269104646' },
]
const { findIcon } = useIconsClient();
</script>

<style module="s" lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;
}
.text {
  line-height: 1.8;
  font-size: 1.2rem;
  font-weight: 200;
}
</style>
