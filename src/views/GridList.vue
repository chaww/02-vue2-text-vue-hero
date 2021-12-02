<template>
  <v-layout column>
    <v-layout row>
      <v-spacer> </v-spacer>
      <v-btn flat icon @click="isGrid = !isGrid">
        <v-icon v-if="!isGrid"> view_module </v-icon>
        <v-icon v-else> list </v-icon>
      </v-btn>
    </v-layout>
    <Hero
      :tag="0"
      v-if="isGrid"
      key="grid"
      :styles="['borderRadius', 'fontSize', 'boxShadow']"
    >
      <v-layout row wrap>
        <v-flex
          xs6
          style="padding: 15px"
          v-for="(item, index) in movies"
          :key="index"
        >
          <div
            hero-deep="false"
            :hero-index="-1"
            :hero-tag="0"
            :ref="`card_${index}`"
            style="
              background: #fff;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);
            "
          >
            <div
              :hero-index="1"
              :hero-tag="0"
              hero-deep="true"
              :ref="`image_${index}`"
              class="media_image"
              :style="`width:100%; height:250px;overflow:hidden`"
            >
              <img :src="item.poster" style="width: 100%; height: 100%" />
            </div>
            <v-card-text>
              <h4
                :hero-tag="0"
                :ref="`title_${index}`"
                style="
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                {{ item.title }}
              </h4>
            </v-card-text>
          </div>
        </v-flex>
      </v-layout>
    </Hero>
    <Hero :tag="0" key="list" v-else :styles="['borderRadius', 'fontSize']">
      <v-layout column justify-center>
        <template v-for="(item, index) in movies">
          <div
            :hero-index="-1"
            hero-deep="false"
            :key="index"
            :hero-tag="0"
            :ref="`card_${index}`"
            style="
              background: #fff;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
            "
          >
            <v-layout align-center row>
              <div
                hero-deep="true"
                :hero-tag="0"
                :ref="`image_${index}`"
                class="media_image"
                :style="`margin:15px; width:48px; height:48px; border-radius:50%; overflow:hidden`"
              >
                <img
                  :src="item.poster"
                  style="min-width: 100%; max-height: 100%"
                />
              </div>
              <h4 :hero-tag="0" :ref="`title_${index}`" style="font-size: 14px">
                {{ item.title }}
              </h4>
            </v-layout>
          </div>
        </template>
      </v-layout>
    </Hero>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      isGrid: true,
      movies: [
        { "title": "Game Night", "poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SX300.jpg" }, { "title": "Hollywood Game Night", "poster": "https://m.media-amazon.com/images/M/MV5BYzViMWZlYjktM2IyNy00OTU5LTkzYTQtOWQ5ZjYwMzk5YTQ4XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_SX300.jpg" }, { "title": "Night Game", "poster": "https://m.media-amazon.com/images/M/MV5BYjA5NDMxNWUtYWVkZC00MzgxLTg1YTItNWJkODE2YzExY2QzXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg" }, { "title": "Saturday Night Live: Game Show Parodies", "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MjI3Mzk0Ml5BMl5BanBnXkFtZTYwODM5MjY5._V1_SX300.jpg" }, { "title": "Family Game Night", "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3OTY3NzEwMl5BMl5BanBnXkFtZTgwNzE4NjA4MTE@._V1_SX300.jpg" }, { "title": "Game Night", "poster": "http://ia.media-imdb.com/images/M/MV5BMTM4NDY4MDc3MV5BMl5BanBnXkFtZTcwODYxNDY2NA@@._V1_SX300.jpg" }, { "title": "Game Night", "poster": "https://m.media-amazon.com/images/M/MV5BMDE1YWUzOWUtMTI5My00MjE1LTk4NDAtMTZkMWVjZDdkNDY2XkEyXkFqcGdeQXVyMzA5OTA5Ng@@._V1_SX300.jpg" }, { "title": "Celebrity Game Night", "poster": "http://ia.media-imdb.com/images/M/MV5BN2QwOTA5MmItMWZiMi00YmE1LThmYTQtODY5MThjM2VhM2VhXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_SX300.jpg" }, { "title": "Game Night", "poster": "N/A" }, { "title": "Hasbro Family Game Night 3", "poster": "N/A" }, { "title": "Hannah and Her Sisters", "poster": "https://m.media-amazon.com/images/M/MV5BMWZiNWUwYjMtM2Y1Yi00MTZmLWEwYzctNjVmYWM0OTFlZDFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, { "title": "Hannah Montana: The Movie", "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNjUxODY3NF5BMl5BanBnXkFtZTcwMjQyMzMzMg@@._V1_SX300.jpg" }, { "title": "Hannah Montana", "poster": "https://m.media-amazon.com/images/M/MV5BZTdlNzhmYmYtOGE3Zi00NTViLWFhM2UtYWQ4NjMzNGRiYTU3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg" }, { "title": "The Possession of Hannah Grace", "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTIwODY4Nl5BMl5BanBnXkFtZTgwNzkxNDc2NjM@._V1_SX300.jpg" }, { "title": "Hannah Arendt", "poster": "https://m.media-amazon.com/images/M/MV5BMjIyMDM2NTUyNF5BMl5BanBnXkFtZTcwOTQ2NzAzOQ@@._V1_SX300.jpg" }, { "title": "Hannah Montana and Miley Cyrus: Best of Both Worlds Concert", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NDIwODE4Ml5BMl5BanBnXkFtZTYwNTI5Nzc4._V1_SX300.jpg" }, { "title": "Hannah Gadsby: Nanette", "poster": "https://m.media-amazon.com/images/M/MV5BY2I3MThmYTctZTU4YS00YWNmLTg4YzktNDY0ZGE5MmQ3Y2Q3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, { "title": "Hannah Takes the Stairs", "poster": "https://m.media-amazon.com/images/M/MV5BMTU4OTk2MjY4MF5BMl5BanBnXkFtZTcwNjgyMjg2MQ@@._V1_SX300.jpg" }, { "title": "Hannah", "poster": "https://m.media-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SX300.jpg" }, { "title": "Hannah Montana: One in a Million", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNzgxMzkzOF5BMl5BanBnXkFtZTcwNDMzMjE2MQ@@._V1_SX300.jpg" }, { "title": "The Lodgers", "poster": "https://m.media-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SX300.jpg" }, { "title": "The Lodgers of an Old House", "poster": "N/A" }, { "title": "The Lodgers of the seventh heaven", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTllZThmNzMtMmVhYi00N2Y2LTg0NzgtMWVkMzU0YmJiNzk1XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg" }, { "title": "Beast of Burden", "poster": "https://m.media-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SX300.jpg" }, { "title": "Beast of Burden", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyNTcwOTc3OF5BMl5BanBnXkFtZTcwMDQxMjU1MQ@@._V1_SX300.jpg" }, { "title": "Beast of Burden", "poster": "N/A" }, { "title": "Beast of Burden", "poster": "N/A" }, { "title": "Beast of Burden", "poster": "N/A" }, { "title": "Beast of Burden", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDdlMWE1YmQtODExYy00ODdhLWIwMDEtOGE0NzdlZWFmMmMzXkEyXkFqcGdeQXVyNjAyNzI2OTY@._V1_SX300.jpg" }, { "title": "Harry Potter and the Chamber of Secrets", "poster": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg" },]
    }
  },
  created() {

  }
}
</script>