<script setup>
const routeName = useRoute().name?.toString();
const heading = routeName
  ? routeName === "index"
    ? "About"
    : capitalize(routeName)
  : "Heading";
</script>

<template>
  <h1>{{ heading }}</h1>
  <slot></slot>
</template>
