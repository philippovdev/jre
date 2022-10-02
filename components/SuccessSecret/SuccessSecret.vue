<template>
  <h3 :class="s.title">В чем же секрет нашего успеха?</h3>
  <a-row :gutter="16">
    <a-col :span="24" :lg="{span: 8}">
      <feature-card icon="professional" title="Высокий профессионализм">
        <template #text>
          Высокий профессионализм, прекрасное знание рынка и глубокое понимание всех вопросов возникающих в данной
          сфере. Наш опыт и знания нарабатывались годами. Результат — успешное выполнение любых заказов наших
          клиентов.
        </template>
      </feature-card>
    </a-col>
    <a-col :span="24" :lg="{span: 8}">
      <feature-card icon="individual-approach" title="Индивидуальный подход">
        <template #text>
          Мы готовы к любым, самым сложным задачам, которые могут возникнуть при удаленной регистрации сделок с
          недвижимостью. Поэтому всегда индивидуально подходим к решению.
        </template>
      </feature-card>
    </a-col>
    <a-col :span="24" :lg="{span: 8}">
      <feature-card icon="customer-profit" title="Выгода нашего клиента">
        <template #text>
          Выгода нашего клиента — вот главная цель нашей работы. Мы понимаем, что обращаясь к нам, человек доверяет
          нам и как профессионалам, и как честной порядочной компании. Мы делаем всё, чтобы оправдать его доверие и
          принести ему максимальную выгоду.
        </template>
      </feature-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import {default as ARow} from 'ant-design-vue/lib/row/index';
import {default as ACol} from 'ant-design-vue/lib/col/index';
import 'ant-design-vue/lib/grid/style/index.css';
</script>

<style module="s" lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 6rem;
  text-align: center;
}
</style>
