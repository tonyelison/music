<template>
  <header>
    <div><NuxtLink class="logo" to="/">tony elison</NuxtLink></div>
    <nav>
      <div><NuxtLink to="/" class="index">about</NuxtLink></div>
      <div><NuxtLink to="listen" class="listen">listen</NuxtLink></div>
      <!-- <div><NuxtLink to="watch" class="listen">watch</NuxtLink></div> -->
      <div><NuxtLink to="contact" class="contact">contact</NuxtLink></div>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  background-color: #e2fffe;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.logo {
  font-weight: bold;
  font-size: 18px;
}

nav {
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

a {
  text-decoration: none;
  color: black;
  position: relative;
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
  height: 1.2px;
  bottom: 0;
  left: 0;
  background-color: black;
}

nav a:not(.router-link-exact-active)::before {
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
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
