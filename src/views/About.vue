<template>
  <v-layout
    class="about"
    style="padding: 15px; width: 100%"
    justify-center
    column
  >
    <h1 style="padding: 15px">Pick an Artist</h1>
    <Hero :styles="['boxShadow', 'borderRadius', 'fontSize']" tag="artist0">
      <v-layout column align-center>
        <div
          @click="
            () => {
              $router.push('/list');
            }
          "
          hero-index="1"
          hero-tag="artist0"
          ref="artist_cover_0"
          :style="`box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12) ;width:150px; height:150px; border-radius:50%; background:url('data:image/jpeg;base64,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'); background-position:center; background-size:cover;margin-bottom: 15px`"
        ></div>
        <h3 hero-tag="artist0" ref="artist_title_0" style="font-size: 18px">
          Architects
        </h3>
      </v-layout>
    </Hero>
    <Hero :styles="['boxShadow', 'borderRadius', 'fontSize']" tag="artist1">
      <v-layout column align-center style="margin-top: 15px">
        <div
          @click="
            () => {
              $router.push('/list');
            }
          "
          hero-index="1"
          hero-tag="artist1"
          ref="artist_cover"
          :style="`box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12) ;width:150px; height:150px; border-radius:50%; background:url('https://pbs.twimg.com/profile_images/1001318139437576192/155hwcrA.jpg'); background-position:center; background-size:cover;margin-bottom: 15px`"
        ></div>
        <h3 hero-tag="artist1" ref="artist_title">Asking Alexandria</h3>
      </v-layout>
    </Hero>
    <Hero :styles="['boxShadow', 'borderRadius', 'fontSize']" tag="artist2">
      <v-layout column align-center style="margin-top: 15px">
        <div
          @click="
            () => {
              $router.push('/list');
            }
          "
          hero-index="1"
          hero-tag="artist2"
          ref="artist_cover"
          :style="`box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12) ;width:150px; height:150px; border-radius:50%; background:url('https://www.udiscovermusic.com/wp-content/uploads/2018/04/c_Ville_Juurikkala-0087-5-web-optimised.jpg'); background-position:center; background-size:cover;margin-bottom: 15px`"
        ></div>
        <h3 hero-tag="artist2" ref="artist_title">Bullet for my Valentine</h3>
      </v-layout>
    </Hero>
  </v-layout>
</template>
