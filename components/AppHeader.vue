<template>
  <header :class="isScrolling ? 'scrolling' : ''">
    <div><NuxtLink class="logo" to="/">tony elison</NuxtLink></div>
    <NavBar></NavBar>
  </header>
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
</script>

<style scoped>
header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 50px;
  /* background-color: #a1fffc; */
  background-color: #c9fffd;
  transition: background 0.5s ease-in-out 0s;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
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
</style>
