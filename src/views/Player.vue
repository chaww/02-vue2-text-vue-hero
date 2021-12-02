<template>
  <div style="width: 100%; height: 100%">
    <Hero
      style="width: 100%; height: 100%"
      :styles="['boxShadow', 'borderRadius', 'fontSize']"
      :tag="parseInt($route.params['id'])"
    >
      <div
        ref="background"
        :hero-tag="$route.params['id']"
        hero-deep="false"
        style="
          width: 100%;
          height: 100%;
          position: relative;
          background: #fff;
          overflow: hidden;
          padding: 20px;
          border-radius: 0%;
        "
      >
        <v-layout style="height: 100%" align-center justify-center column>
          <div>
            <div
              hero-index="1"
              :hero-tag="$route.params['id']"
              ref="album_cover"
              :style="`box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12) ;width:200px; height:200px; background:url('${item.image}'); background-position:center; background-size:cover;`"
            ></div>
            <v-layout
              column
              align-center
              justify-center
              style="padding: 15px; text-align: center"
            >
              <div
                ref="text"
                hero-index="2"
                :hero-tag="$route.params['id']"
                style="font-size: 21px"
              >
                <h4>{{ item.title }}</h4>
              </div>
              <div ref="text2" hero-index="2" :hero-tag="$route.params['id']">
                <h5>{{ item.artist }}</h5>
              </div>
            </v-layout>
            <v-layout row justify-center align-center>
              <v-icon>></v-icon>
              <div
                style="
                  z-index: 50000;
                  width: 40px;
                  height: 40px;
                  padding: 7px;
                  background: rgb(51, 51, 51);
                  margin: 0 15px;
                  border-radius: 50%;
                  text-align: center;
                  visibility: hidden;
                "
                ref="fab_play"
                :hero-tag="$route.params['id']"
                hero-index="2"
                @click="
                  () => {
                    $router.go(-1);
                  }
                "
              >
                <v-icon color="white">||</v-icon>
              </div>
              <v-icon>>></v-icon>
            </v-layout>
          </div>
        </v-layout>
      </div>
    </Hero>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "https://i.ytimg.com/vi/RvWbcK3YQ_o/maxresdefault.jpg",
          title: "Doomsday",
          artist: "Architects"
        },

        {
          image: "https://i.ytimg.com/vi/hvWnnSCJHeM/maxresdefault.jpg",
          title: "Hereafter",
          artist: "Architects"
        }
      ]
    };
  },
  computed: {
    item() {
      return this.items[this.$route.params["id"]];
    }
  }
};
</script>

<style lang="css" scoped>
.blue {
  width: 100px;
  height: 100px;
  border-radius: 30%;
  background: #00f;
}
</style>