<script setup>
defineProps({
  links: Array,
  linkAction: Function,
});
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links">
        <NuxtLink :to="link.to" @click.native="linkAction">{{
          link.label
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

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
  column-gap: 10px;
  row-gap: 20px;
}

/* flyout menu nav */
.dropdown ul {
  flex-direction: column;
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
