<template>
  <nav v-if="isDesktopView">
    <ul>
      <li v-for="link in links">
        <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
  <HamburgerMenu v-else></HamburgerMenu>
</template>

<script setup>
const resizeThreshold = 768;
const isDesktopView = ref(true);

const checkResize = () => {
  isDesktopView.value = window.innerWidth > resizeThreshold;
};

onMounted(() => {
  checkResize();
  window.addEventListener("resize", checkResize);
});

onUnmounted(() => {
  window.addEventListener("resize", checkResize);
});

const links = [
  { label: "about", to: "/" },
  { label: "watch", to: "/watch" },
  { label: "listen", to: "/listen" },
  { label: "contact", to: "/contact" },
];
</script>

<style scoped>
nav {
  width: 100%;
  margin-left: auto;
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

a {
  text-decoration: none;
  color: black;
  position: relative;
  font-weight: 500;
}

nav a:hover {
  text-decoration: none;
  color: black;
}

nav a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
}

nav a:not(.router-link-exact-active)::before {
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.22s ease;
}

nav a:not(.router-link-exact-active):hover::before {
  transform: scaleX(1);
}

nav a.router-link-exact-active::before {
  height: 2px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
