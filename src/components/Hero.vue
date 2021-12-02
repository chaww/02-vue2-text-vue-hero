<template>
  <div>
    <slot v-bind:tag="tag"></slot>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: [String, Number],
      default: "" + new Date().getTime()
    },
    styles: {
      type: Array,
      default: () => ["background", "borderRadius"]
    },
    duration: {
      type: Number,
      default: 500
    },
    easing: {
      type: String,
      default: 'ease'
    }
  },
  data() {
    return {
      elements: {},
      position: {},
      clone: {},
      interval: null
    };
  },
  methods: {
    initialAnimation() {
      if(!this.$hero.items[this.tag]) return;
      let keys = Object.keys(this.elements).reverse();
      for (let i in keys) {
        let key = keys[i];
        let element = this.elements[key];
        if (!this.$hero.items[this.tag][key]) continue;
        let animated = this.$hero.items[this.tag][key];
        animated.style.visibility = "visible";
        element.style.visibility = "hidden";
        animated.style.transition = `all ${this.duration / 1000}s ${this.easing}`;
        let animatedPosition = animated.getBoundingClientRect();
        let transformX = this.position[key].left - animatedPosition.left;
        let transformY = this.position[key].top - animatedPosition.top;
        animated.style.width = this.position[key].width + "px";
        animated.style.height = this.position[key].height + "px";
        animated.style.transform = `translate3d(0, 0, 0) translateX(${transformX}px) translateY(${transformY}px)`;
        this.styles.forEach(x => {
          animated.style[x] = element.style[x];
        });
        this.hideElement(key);
      }
    },
    hideElement(key) {
      setTimeout(() => {
        this.$hero.items[this.tag][key].remove();
        this.elements[key].style.visibility = "visible";
      }, this.duration);
    },
    updateClone() {
      for (let key in this.elements) {
        let element = this.elements[key];
        let positions = element.getBoundingClientRect();
        if (!this.position[key]) this.position[key] = {};
        this.position[key].top = positions.top;
        this.position[key].left = positions.left;
        this.position[key].width = positions.width;
        this.position[key].height = positions.height;
      }
    },
    makeClone(key) {
      let deep = this.elements[key].attributes["hero-deep"]
        ? this.elements[key].attributes["hero-deep"].value == "true"
        : true;
      let zIndex =
        1000 +
        (this.elements[key].attributes["hero-index"]
          ? parseInt(this.elements[key].attributes["hero-index"].value)
          : 0);
      this.clone[key] = this.elements[key].cloneNode(deep);
      this.clone[key].style.zIndex = zIndex;
      this.clone[key].style.position = "absolute";
      this.clone[key].style.top = "0";
      this.clone[key].style.transition = "none";
      this.clone[key].style.visibility = "hidden";
      this.clone[key].style.pointerEvents = "none";
      document.body.appendChild(this.clone[key]);
    },
    checkClones() {
      if (!this.$hero.items[this.tag]) return;
      for (let key in this.$hero.items) {
        if (key == this.tag) continue;
        let elements = this.$hero.items[key];
        for (let key2 in elements) {
          elements[key2].remove();
        }
        delete this.$hero.items[key];
      }
    }
  },
  beforeDestroy() {
    if (!this.$hero.items[this.tag]) this.$hero.items[this.tag] = {};
    for (let key in this.elements) {
      this.$hero.items[this.tag][key] = this.clone[key];
      if (this.interval != null) window.clearInterval(this.interval);
      this.clone[key].style.width = this.position[key].width + "px";
      this.clone[key].style.height = this.position[key].height + "px";
      this.clone[key].style.top = this.position[key].top + "px";
      this.clone[key].style.left = this.position[key].left + "px";
      this.clone[key].style.position = "absolute";
      this.clone[key].style.visibility = "visible";
      this.$hero.inUse[this.tag][key] = false;
      this.elements[key].remove();
    }
  },
  destroyed(){
    setTimeout(()=>{
    for(let tag in this.$hero.items){
      for(let key in this.$hero.items[tag]){
        console.log(tag, key, this.$hero.inUse[tag][key]);
        if(!this.$hero.inUse[tag][key]){
          this.$hero.items[tag][key].remove();
          delete this.$hero.items[tag][key];
        }
      }
    }
    },50);
    
  },
  mounted() {
    this.$nextTick(function() {
      this.checkClones();
      if(!this.$hero.inUse[this.tag]) this.$hero.inUse[this.tag] = {};
      for (let key in this.$scopedSlots.default()[0].context.$refs) {
        this.$hero.inUse[this.tag][key] = true;
        let ref = this.$scopedSlots.default()[0].context.$refs[key];
        if (Array.isArray(ref)) {
          for (let i = 0; i < ref.length; i++) {
            let isScoped = ref[i].attributes["hero-tag"]
              ? ref[i].attributes["hero-tag"].value == this.tag
              : false;
            if (!isScoped) continue;
            else {
              this.elements[key] = ref[i];
              this.makeClone(key);
              this.updateClone();
            }
          }
        } else {
          this.elements[key] = ref;
          this.makeClone(key);
          this.updateClone();
        }
      }
      for(let key in this.$hero.items[this.tag]){
        if(!this.elements[key]) {
          this.$hero.items[this.tag][key].remove();
          delete this.$hero.items[this.tag][key];
        }
      }
      this.initialAnimation();
      this.interval = setInterval(() => {
        this.updateClone();
      }, 500);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>