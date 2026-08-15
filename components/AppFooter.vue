<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer>© Tony Elison, {{ year }}</footer>
</template>

<style scoped>
footer {
  height: 40px;
  background-color: black;
  color: white;

  display: flex;
  justify-content: right;
  align-items: center;
}

@media screen and (max-width: 425px) {
  footer {
    justify-content: left;
  }
}
</style>
