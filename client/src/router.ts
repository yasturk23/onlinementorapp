import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/HomeVue.vue"),
    },
    {
      path: "/about",
      component: () => import("./components/AboutVue.vue"),
    },
  ],
});
