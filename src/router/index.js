import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pricing from "../views/Pricing.vue";
import Landing from "../layout/Landing";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    children: [
      {
        path: "",
        component: Home,
        name: "Home",
        
      },
      {
        path: "/availability",
        component: About,
        name: "About",
      },
      {
        path: "/pricing",
        component: Pricing,
        name: "Pricing",
      }
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
