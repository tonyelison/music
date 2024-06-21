<script setup>
defineProps({
  src: String,
  title: String,
  event: String,
  date: String,
});
</script>

<template>
  <div class="vid-card">
    <iframe
      class="vid-frame"
      :src="src"
      :title="title"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen="true"
    ></iframe>
    <div class="description">
      {{ title }} | <em>{{ event }}, {{ date }}</em>
    </div>
  </div>
</template>

<style scoped>
.vid-card:hover {
  outline: 1px solid black;
}
.vid-frame {
  width: 100%;
  min-height: 400px;
}

.description {
  padding-bottom: 5px;
}

em {
  white-space: nowrap;
}
</style>
