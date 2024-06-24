<template>
  <button @click="toggleMenu" :class="menuIsActive ? 'active' : ''">
    <svg class="hamburger" viewBox="0 0 100 100" width="25">
      <rect class="line top" width="80" height="8" x="10" y="25" rx="4"></rect>
      <rect
        class="line middle"
        width="80"
        height="8"
        x="10"
        y="45"
        rx="4"
      ></rect>
      <rect
        class="line bottom"
        width="80"
        height="8"
        x="10"
        y="65"
        rx="4"
      ></rect>
    </svg>
  </button>
  <div class="dropdown" :style="menuIsActive ? 'display: none;' : ''"></div>
</template>

<script setup>
const menuIsActive = ref(false);

const toggleMenu = () => {
  menuIsActive.value = !menuIsActive.value;
};
</script>

<style>
button {
  all: unset;
  width: min-content;
  justify-self: right;
  cursor: pointer;

  --transition-speed: 200ms;
}

button:focus {
  outline: revert;
}

.line {
  transition: y var(--transition-speed) ease-in-out var(--transition-speed),
    rotate var(--transition-speed) ease-in-out,
    opacity 0ms var(--transition-speed);
  transform-origin: center;
}

button.active .line {
  transition: y var(--transition-speed) ease-in-out,
    rotate var(--transition-speed) ease-in-out var(--transition-speed),
    opacity 0ms var(--transition-speed);
}

button.active :is(.top, .bottom) {
  y: 45;
}

button.active .top {
  rotate: 45deg;
}

button.active .middle {
  opacity: 0;
}

button.active .bottom {
  rotate: -45deg;
}
</style>
