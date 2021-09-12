import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create",
    name: "SignUp",
    component: () => import(/* webpackChunkName: "Create" */ "../views/Create"),
  },
  {
    path: "/gender",
    name: "Gender",
    component: () =>
      import(/* webpackChunkName: "gender" */ "../components/create/gender"),
  },
  {
    path: "/language",
    name: "Language",
    component: () =>
      import(
        /* webpackChunkName: "language" */ "../components/create/language"
      ),
  },
  {
    path: "/createSuccess",
    name: "Create Success",
    component: () =>
      import(
        /* webpackChunkName: "createSuccess" */ "../components/create/createSuccess"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
