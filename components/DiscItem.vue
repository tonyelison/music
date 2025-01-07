<script setup>
defineProps({
  linkSrc: String,
  title: String,
  artist: String,
  label: String,
  date: String,
});
</script>

<template>
  <div class="disc-item">
    <a :href="linkSrc" target="_blank">“{{ title }}”</a>
    <div v-if="artist">
      &nbsp;- {{ artist }}<span v-if="label || date">&nbsp;</span>
    </div>
    <div v-if="label">({{ label }}{{ date ? `, ${date}` : "" }})</div>
    <div v-else-if="date">({{ date }})</div>
  </div>
</template>

<style scoped>
div.disc-item {
  display: flex;
  flex-wrap: wrap;
}
a {
  cursor: pointer;
}
</style>
