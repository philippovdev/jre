<template>
  <ul :class="s.list">
    <li v-for="item in services" :key="item.id" :class="s.item">
        <div :class="s.text">
          <h3 :class="s.title">{{ item.title }}</h3>
        </div>
      <ul v-if="item.children" :class="s.innerList">
        <li v-for="child in item.children" :key="child.id" :class="s.item">
            <div :class="s.text">
              <h3 :class="s.title">{{ child.title }}</h3>
            </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {v4 as uuidv4} from 'uuid';
type AdditionalService = {
  id: string;
  title: string;
  children?: AdditionalService[];
};

const services: AdditionalService[] = [
  {
    id: uuidv4(),
    title: 'Полное представительство на сделках от имени и по поручению клиента под  ключ (при наличии нотариально подтвержденных полномочий):',
    children: [
      {title: 'сбор документов, снятие с регистрационного учета всех зарегистрированных в объекте', id: uuidv4(),},
      {title: 'восстановление документов, перевод и апостилирование  документов', id: uuidv4(),},
      {title: 'сбор, подача и получение документов в БТИ (Бюро технической инвентаризации), Росреестр, ИФНС (налоговая служба), МФЦ, ЗАГС и др.учреждения', id: uuidv4(),},
      {title: 'открытие счетов, конвертация и отправка полученных средств продавцу', id: uuidv4(),},
      {title: 'освобождение объекта от мебели и личных вещей продавца', id: uuidv4(),},
      {title: 'упаковка и отправка необходимого имущества  по адресу продавца посредством указанной им транспортной компании и др.', id: uuidv4(),}
    ]
  },
  {
    id: uuidv4(),
    title: 'Подготовка проектов всех документов для продавца, необходимых для представления его интересов в России:',
  },
  {title: 'Организация рекламной кампании и поиск покупателей  объекта недвижимости', id: uuidv4(),},
  {title: 'Организация осмотров предлагаемого объекта недвижимости', id: uuidv4(),},
  {title: 'Подготовка всей документации, оформление, регистрация сделок', id: uuidv4(),},
  {title: 'Разработка безопасной схемы взаиморасчетов', id: uuidv4(),},
  {title: 'Оптимизация условий сделки', id: uuidv4(),},
  {title: 'Консультации по банковскому переводу денежных средств', id: uuidv4(),},
  {title: 'Консультации по вопросам налогообложения, в том числе резидентов и нерезидентов', id: uuidv4(),},
  {
    id: uuidv4(),
    title: 'Подготовка проектов всех документов для покупателя, необходимых для представления его интересов в России:',
  },
]
</script>

<style module="s" lang="scss">
.list {
  list-style: disc;
  padding-left: 2rem;
  overflow: hidden;
  max-width: 100%;
}
.innerList {
  list-style: circle;
  padding-left: 1.5rem;
}
.item {
  line-height: 2;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
