import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
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
    path: "/create/gender",
    name: "Gender",
    component: () =>
      import(/* webpackChunkName: "gender" */ "../components/create/gender"),
  },
  {
    path: "/create/gender/language",
    name: "Language",
    component: () =>
      import(
        /* webpackChunkName: "language" */ "../components/create/language"
      ),
  },
  {
    path: "/create/gender/language/createSuccess",
    name: "Create Success",
    component: () =>
      import(
        /* webpackChunkName: "createSuccess" */ "../components/create/createSuccess"
      ),
  },
  {
    path: "/signIn",
    name: "Sign In",
    component: () => import(/* webpackChunkName: "signIn" */ "../views/SignIn"),
  },
  {
    path: "/resetPassword",
    name: "Reset Password",
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ "../components/signIn/resetPassword"
      ),
  },
  {
    path: "/SearchMedicine",
    name: "Search Medicine",
    component: () =>
      import(
        /* webpackChunkName: "SearchMedicine" */ "../views/SearchMedicine"
      ),
  },
  {
    path: "/searchMedicineDetail",
    name: "Search Medicine Detail",
    component: () =>
      import(
        /* webpackChunkName: "searchMedicineDetail" */ "../components/searchMedicine/searchMedicineDetail"
      ),
  },
  {
    path: "/medicinesResultCat",
    name: "Medicines Result Cat",
    component: () =>
      import(
        /* webpackChunkName: "medicinesResultCat" */ "../components/searchMedicine/medicinesResultCat"
      ),
  },
  {
    path: "/medicinesResult",
    name: "Medicines Result",
    component: () =>
      import(
        /* webpackChunkName: "medicnesResult" */ "../components/searchMedicine/medicinesResult"
      ),
  },
  {
    path: "/medicinesDetail",
    name: "Medicines Detail",
    component: () =>
      import(
        /* webpackChunkName: "medicinesDetail" */ "../components/searchMedicine/medicinesDetail"
      ),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
