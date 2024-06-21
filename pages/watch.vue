<script setup>
const videos = [
  {
    src: "https://www.youtube.com/embed/T289e_nU22o?si=C0pka9t5NqR1Me_6",
    title: "Alicia Wrigley Quartet, Full Concert",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/QBQOgQWEmko?si=-_BYJmTJcIeSgFcc",
    title: "Brian Woodbury Quintet, Full Concert",
    event: "Excellence Concerts",
    date: "2023",
  },
  {
    src: "https://www.youtube.com/embed/RmVltKTz9Cw?si=TCzsFEI9OwMgdRgP",
    title:
      '"Coming Home" - John Petrucelli Quartet, Commissioned by Disney-Pixar',
    event: "Funk Studios",
    date: "2021",
  },
  {
    src: "https://www.youtube.com/embed/pvhyWPPXAtA?si=3EyTaZXVKjM-o1m3",
    title: '"Take Five" - John Petrucelli Quintet',
    event: "Excellence Concerts",
    date: "2021",
  },
  {
    src: "https://www.youtube.com/embed/26C7dkBN6QI?si=tJrgxaIh-CoGpopM",
    title: '"Strange Meadow Lark" - John Petrucelli Quintet',
    event: "Excellence Concerts",
    date: "2021",
  },
  {
    src: "https://www.youtube.com/embed/cnka9KKllLY?si=_PvYw_iFTuk2ysGb",
    title: "University of Utah Faculty Jazz Ensemble, Full Concert",
    event: "Excellence Concerts",
    date: "2021",
  },
];
</script>

<template>
  <h1>Watch</h1>
  <ul class="vid-grid">
    <li v-for="video in videos">
      <VideoCard :video="video"></VideoCard>
    </li>
  </ul>
</template>
