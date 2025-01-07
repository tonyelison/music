<template>
  <PageContainer>
    <div class="content">
      <div class="info">
        <section>
          <p>
            <strong class="weight-md">Tony Elison</strong> is a pianist and
            educator based in Salt Lake City. He has been an active participant
            in the Salt Lake City music scene for nearly ten years, and is one
            of the most sought-after pianists and keyboardists in the area. He
            can be found performing several times weekly at local establishments
            in and around the city.
          </p>
          <p>
            Tony maintains a private teaching practice, and is also faculty at
            the University of Utah, Westminster University, and Utah Valley
            University where he teaches piano, improvisation, composition and
            arranging, and ensemble skills.
          </p>
        </section>
        <hr />
        <section class="vid-grid">
          <h2>Selected Discography</h2>
          <ul>
            <li v-for="item in discography">
              <DiscItem
                :artist="item.artist"
                :title="item.title"
                :label="item.label"
                :date="item.date"
                :link-src="item.linkSrc"
              ></DiscItem>
            </li>
          </ul>
        </section>
        <!-- <section>
          <h2>Notable Venues Performed</h2>
          <ul>
            <li>Dizzy's Club at Jazz at Lincoln Center</li>
            <li>Telluride Jazz Festival</li>
            <li>Montreux Jazz Festival</li>
            <li>Carnegie Hall</li>
          </ul>
        </section> -->
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              BMUS in Jazz Composition + Minor in Computer Science, University
              of Utah, 2020
            </li>
          </ul>
        </section>
        <section>
          <h2>Awards / Honors</h2>
          <ul>
            <li>
              University of Utah Honors Thesis composition project
              <em>Keyframe</em>
              presented at the Issues in Contemporary Jazz Conference Composers
              Forum, 2020
            </li>
            <li>
              Outstanding Senior for the University of Utah School of Music,
              2020
            </li>
            <li>
              Night Star Jazz Orchestra Student Composition Competition, 1st
              Place, 2017
            </li>
          </ul>
        </section>
        <hr />
        <div>Website design and development by Tony Elison.</div>
      </div>
      <div class="img-container">
        <div class="description">Photo by Lone Peak Sound, 2021.</div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup>
const discography = [
  {
    linkSrc:
      "https://open.spotify.com/album/6CBbGoOm63y6lJAN86cs5K?si=nXfX24SWQwy2Wi9UMn_btA",
    title: "Lotus Blossom",
    artist: "Nathan Royal Trio",
    label: "Westmoon Records",
    date: "2024",
  },
  {
    linkSrc:
      "https://open.spotify.com/album/66s9JVbPiTlxESzAyrDM1a?si=Bh8PCXOsTL25wxZ8o7-MJQ&nd=1&dlsi=8f6a41e872c84d65",
    title: "The Great, Great Noise",
    artist: "David Ian Baker",
    label: "Westmoon Records",
    date: "2024",
  },
  {
    linkSrc:
      "https://westminstercollegemusic.bandcamp.com/album/jazz-faculty-concert",
    title: "Jazz Faculty Concert",
    artist: "Westminster College Jazz Faculty",
    label: "Westminster College",
    date: "2022",
  },
  {
    linkSrc:
      "https://open.spotify.com/album/12OuGKWyIlWqFVHInfPp9D?si=IPd_VR1FQs2hQwVEipfJIg",
    artist: "David Halliday",
    title: "Sometimes It Snows in April",
    label: "Lone Peak Sound",
    date: "2021",
  },
  // {
  //   linkSrc:
  //     "https://www.youtube.com/playlist?list=PLKzRMZwfKrwBwefAAHT9vxS1PjbQXfExD",
  //   artist: "Michie Jazz Quintet",
  //   title: "The Michie Sessions",
  //   label: "University of Utah",
  //   date: "2020",
  // },
  {
    linkSrc: "https://anaischantal.bandcamp.com/album/birdie",
    artist: "Anaïs Chantal",
    title: "Birdie",
    label: "Independent",
    date: "2019",
  },
];
</script>

<style scoped>
.info {
  max-width: 800px;
}

@media screen and (max-width: 768px) {
  .info {
    grid-row: 2;
  }

  .img-container {
    grid-row: 1;
    min-height: 40vh;
  }
}
</style>
