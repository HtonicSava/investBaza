import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Main",
  //   component: () => import("@/views/Main.vue"),
  // },
  {
    path: "/",
    name: "MainBeta",
    component: () => import("@/views/MainBeta.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/registry",
    name: "Registry",
    component: () => import("@/views/Registry.vue"),
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("@/views/PersonalAccount.vue"),
  },
  {
    path: "/personal_beta",
    name: "PersonalBeta",
    component: () => import("@/views/PersonalAccountBeta.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
