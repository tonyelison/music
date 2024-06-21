<script setup>
defineProps({
  video: {
    src: String,
    title: String,
    event: String,
    date: String,
  },
});
</script>

<template>
  <iframe
    class="vid-card"
    :src="video.src"
    :title="video.title"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen="true"
  ></iframe>
  <div class="description">
    {{ video.title }} | {{ video.event }}, {{ video.date }}
  </div>
</template>

<style scoped>
.vid-grid {
  background-color: red;
}
</style>
