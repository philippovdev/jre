<template>
  <div :class="s.wrapper">
    <div v-for="service in services" :key="service.id" :class="s.card">
      <span :class="s.icon">
        <component v-if="service.icon" width="60" :is="findIcon(service.icon)"/>
      </span>
      <h2 :class="s.title">{{ service.title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {v4 as uuidv4} from 'uuid';
import useIconsClient from "~/composables/useIcons.client";

const {findIcon} = useIconsClient()

const services = reactive([
  {
    id: uuidv4(),
    title: "Продажа и покупка жилой и коммерческой недвижимости",
    icon: "buy-sale"
  },
  {
    id: uuidv4(),
    title: "Консультационная помощь и полное сопровождение при вступлении в наследство (открытие наследственного дела, сбор, восстановление, нотариальное оформление  и регистрация всего комплекта документов в регистрирующем органе)",
    icon: "consult"
  },
  {
    id: uuidv4(),
    title: "Выступаем медиаторами при сложных случаях в долевой собственности на недвижимость",
    icon: "mediator"
  },
  {
    id: uuidv4(),
    title: "Консультации и сопровождение  при семейных переоформлениях недвижимости",
    icon: "family"
  },
  {
    id: uuidv4(),
    title: "Помощь в оценке всех видов недвижимости",
    icon: "house-cost"
  },
  {
    id: uuidv4(),
    title: "Реализация залоговой недвижимости, имеющей обременение в Росреестре",
    icon: "rosreestr"
  },
  {
    id: uuidv4(),
    title: "Юридическая экспертиза объекта недвижимости",
    icon: "jur-expert"
  },
  {
    id: uuidv4(),
    title: "Юридическое сопровождение и представительство на сделках",
    icon: "jur-assistance"
  },
  {
    id: uuidv4(),
    title: "Бесплатная  экспресс-оценка недвижимости по телефону нашими специалистами",
    icon: "free-cost-estimation"
  },
  {
    id: uuidv4(),
    title: "Бесплатные консультации по любым вопросам с недвижимостью",
    icon: "free-consulting"
  }
])
</script>

<style module="s" lang="scss">
.wrapper {
  @apply grid grid-cols-1 gap-4;

  @media (min-width: 768px) {
   @apply grid-cols-2;
  }
  @media (min-width: 1024px) {
    @apply grid-cols-3;
    & > *:last-child {
      @apply col-start-2;
    }
  }
}

.card {
  min-height: 200px;
  @apply col-auto bg-white p-4 rounded-lg shadow-lg;
}

.icon {
  @apply flex justify-center items-center my-5;
}
.title {
  @apply text-center text-lg mb-5;
}
</style>
