import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
  , {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue")
  },
  {
    path: "/player/:id",
    name: "player",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Player.vue")
  },
  {
    path: "/image",
    name: "image",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Image.vue")
  },
  {
    path: "/grid",
    name: "grid",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GridList.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
