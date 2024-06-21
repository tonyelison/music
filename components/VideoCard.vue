<script setup>
defineProps({
  src: String,
  title: String,
  event: String,
  date: String,
});
</script>

<template>
  <iframe
    class="vid-card"
    :src="src"
    :title="title"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen="true"
  ></iframe>
  <div class="description">{{ title }} | {{ event }}, {{ date }}</div>
</template>
