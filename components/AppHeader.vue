<template>
  <header :class="scrollingClasses">
    <NuxtLink class="logo" @click.native="navFlyout.toggle(false)" to="/"
      >tony elison
    </NuxtLink>
    <NavBar v-if="isDesktopView" :links="links"></NavBar>
    <HamburgerMenu v-else></HamburgerMenu>
  </header>
  <div class="dropdown" :class="navContainerClasses">
    <NavBar :links="links" :linkAction="() => navFlyout.toggle(false)"></NavBar>
  </div>
</template>

<script setup>
import { navFlyout } from "/stores/navFlyout.ts";
import { scroll } from "/stores/scroll.ts";

const resizeThreshold = 768;
const isDesktopView = ref(true);

const checkResize = () => {
  isDesktopView.value = window.innerWidth > resizeThreshold;
  if (navFlyout.isOpen && isDesktopView) {
    navFlyout.toggle(false);
  }
};

onMounted(() => {
  document.querySelector("header").style.top = 0;
  scroll.addEventListener();
  checkResize();
  window.addEventListener("resize", checkResize);
});

onUnmounted(() => {
  scroll.removeEventListener();
  window.removeEventListener("resize", checkResize);
});

const links = [
  { label: "about", to: "/" },
  { label: "watch", to: "/watch" },
  { label: "listen", to: "/listen" },
  { label: "contact", to: "/contact" },
];

const scrollingClasses = computed(() => {
  return scroll.didScroll && !navFlyout.isOpen ? "scrolling" : "";
});

const navContainerClasses = computed(() => {
  return (navFlyout.isOpen ? "" : "closed") + " " + scrollingClasses.value;
});
</script>

<style scoped>
* {
  --header-height: 50px;
  --header-bg-color: #c9fffd;
}

header {
  z-index: 1;
  position: fixed;
  top: calc(var(--header-height) * -1);
  width: 100%;
  height: var(--header-height);

  /* background-color: #a1fffc; */
  background-color: var(--header-bg-color);
  transition: background 0.5s ease-in-out 0s, top 0.5s ease-in-out;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
}

.scrolling,
.scrolling .dropdown {
  background-color: white !important;
}

.logo {
  width: max-content;
  font-weight: bold;
  font-size: 18px;
  text-wrap: nowrap;
  text-decoration: none;
  color: black;
}

.dropdown {
  padding: var(--screen-padding);
  height: calc(100vh - var(--header-height));
  width: 100%;
  position: fixed;
  top: var(--header-height);
  background-color: var(--header-bg-color);
  z-index: 1;
  overflow: hidden;
  transition: background 0.5s ease-in-out 0s, height 0.5s ease-in-out;
  padding-block: 0;
}

.dropdown.closed {
  height: 0;
}
</style>
