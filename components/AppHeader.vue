<template>
  <header :class="isScrolling ? 'scrolling' : ''">
    <NuxtLink class="logo" @click.native="toggleFlyout(false)" to="/"
      >tony elison</NuxtLink
    >
    <NavBar v-if="isDesktopView" :links="links"></NavBar>
    <HamburgerMenu @click="() => toggleFlyout()" v-else></HamburgerMenu>
  </header>
  <div class="dropdown" :class="flyoutIsOpen ? '' : 'closed'">
    <NavBar :links="links" :linkAction="() => toggleFlyout()"></NavBar>
  </div>
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";

const scrollY = ref(useWindowScroll().y);
const scrollThreshold = 100;
const isScrolling = ref(true);

const setIsScrolling = () => {
  isScrolling.value = scrollY.value > scrollThreshold;
};

const resizeThreshold = 768;
const isDesktopView = ref(true);

const checkResize = () => {
  isDesktopView.value = window.innerWidth > resizeThreshold;
};

onMounted(() => {
  setIsScrolling();
  checkResize();
  window.addEventListener("scroll", setIsScrolling);
  window.addEventListener("resize", checkResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", setIsScrolling);
  window.addEventListener("resize", checkResize);
});

const links = [
  { label: "about", to: "/" },
  { label: "watch", to: "/watch" },
  { label: "listen", to: "/listen" },
  { label: "contact", to: "/contact" },
];

const flyoutIsOpen = ref(false);
const toggleFlyout = (state) => {
  flyoutIsOpen.value = state === undefined ? !flyoutIsOpen.value : state;
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
  padding: var(--screen-padding);
  height: calc(100vh - var(--header-height));
  width: 100%;
  position: fixed;
  top: var(--header-height);
  background-color: var(--header-bg-color);
  z-index: 1;

  transition: height 0.5s ease-in-out, padding-block 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.dropdown.closed {
  height: 0;
  padding-block: 0;
  opacity: 0;
}
</style>
