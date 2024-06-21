<script setup>
const videos = [
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet",
    event: "Excellence Concerts",
    date: "2023",
  },
];
</script>

<template>
  <h1>Listen</h1>
  <ul class="vid-grid">
    <li v-for="video in videos">
      <VideoCard :video="video"></VideoCard>
    </li>
  </ul>
</template>
