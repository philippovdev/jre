<template>
  <h3 :class="s.title" class="text-center">Мы всегда рады вашим обращениям!</h3>
  <ul :class="s.text">
    <li>Мы всегда на связи! Звоните и пишите.</li>
    <li>Прежде чем на что-то решиться — проконсультируйтесь, узнайте детали.</li>
    <li>Вы можете получить профессиональную консультацию абсолютно бесплатно, это ни к чему Вас не обязывает в будущем.</li>
    <li>Гарантия конфиденциальности по любым обращениям.</li>
    <li>Телефон в Москве: +7 (499) 399-3665</li>
    <li>Телефон в Израиле: +972 (3) ххх-хххх</li>
    <li>Telegramm/Whatsapp: +79269104646</li>

  </ul>
</template>

<script setup lang="ts"></script>

<style module="s" lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 6rem;
  text-align: center;
}
.text {
  line-height: 1.8;
  font-size: 1.2rem;
  font-weight: 200;
}
</style>
