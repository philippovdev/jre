<template>
  <header :class="s.header">
    <jre-container :class="s.wrapper">
      <div :class="s.headerInner">
        <p :class="s.disabled">Оперативное решение задач</p>
        <h1 class="my-1">Недвижимость в Москве</h1>
        <p :class="['w-full md:w-1/2', s.disabled]">Вы живёте в России, Израиле, США, Канаде, Германии, но у Вас есть недвижимость в Москве,
          Подмосковье или Санкт-Петербурге, и Вам надо её продать? С удовольствием поможем Вам в этом!</p>
      </div>
      <div :class="s.building" />
    </jre-container>
  </header>
</template>

<style module="s" lang="scss">
.header {
  background-image: url(@/assets/images/header/light-gray-bg-small.webp);
  height: 44rem;
  position: relative;
  @media (min-width: 1024px) {
    background-image: url(@/assets/images/header/light-gray-bg-medium.webp);
    height: 38rem;
  }
  @media (min-width: 1280px) {
    background-image: url(@/assets/images/header/light-gray-bg-large.webp);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: 0;
    backdrop-filter: opacity(30%);
  }
}

.wrapper {
  position: relative;

  .headerInner {
    padding: 30vh 0;
    overflow: hidden;

    & h1 {
      z-index: 1;
      font-size: 2.5rem;
      font-weight: lighter;
      @media (min-width: 768px) {
        font-size: 3.5rem;
      }
    }
  }
}

picture {
  z-index: 0;
  width: auto;
  height: 31.25rem;
  overflow: hidden;
}

.disabled {
  color: lighten(black, 30%);
  font-size: .9rem;
  line-height: 2;
}

.building {
  position: absolute;
  top: 31rem;
  right: 0;
  left: 0;
  height: 14.75rem;
  width: 100%;
  max-width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(@/assets/images/header/hero-building-small.webp);
  @media (min-width: 1024px) {
    background-image: url(@/assets/images/header/hero-building-medium.webp);
    top: 10rem;
    right: 0;
    left: unset;
    width: 50%;
    height: 31.25rem;
  }
  @media (min-width: 1280px) {
    background-image: url(@/assets/images/header/hero-building.webp)
  }
}
</style>
