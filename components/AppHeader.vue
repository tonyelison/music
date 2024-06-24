<template>
  <header :class="isScrolling ? 'scrolling' : ''">
    <NuxtLink class="logo" to="/">tony elison</NuxtLink>
    <NavBar></NavBar>
  </header>
  <!-- <div class="dropdown"></div> -->
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";

const scrollY = ref(useWindowScroll().y);

const scrollThreshold = 100;
const isScrolling = ref(true);

const setIsScrolling = () => {
  isScrolling.value = scrollY.value > scrollThreshold;
};

onMounted(() => {
  setIsScrolling();
  window.addEventListener("scroll", setIsScrolling);
});

onUnmounted(() => {
  window.removeEventListener("scroll", setIsScrolling);
});

const menuIsActive = ref(false);
const toggleMenu = () => {
  menuIsActive.value = !menuIsActive.value;
};
</script>

<style scoped>
* {
  --header-height: 50px;
  --header-bg-color: #c9fffd;
}

header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: var(--header-height);

  /* background-color: #a1fffc; */
  background-color: var(--header-bg-color);
  transition: background 0.5s ease-in-out 0s;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
}

.scrolling {
  background-color: white;
}

.logo {
  font-weight: bold;
  font-size: 18px;
  text-wrap: nowrap;
  text-decoration: none;
  color: black;
}

.logo:hover {
  color: var(--primary-color);
}

.dropdown {
  height: calc(100vh - var(--header-height));
  width: 100vw;
  position: fixed;
  top: var(--header-height);
  background-color: var(--header-bg-color);
  z-index: 1;
}
</style>
