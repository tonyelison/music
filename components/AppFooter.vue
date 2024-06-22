<template>
  <footer>© Tony Elison, 2024</footer>
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
