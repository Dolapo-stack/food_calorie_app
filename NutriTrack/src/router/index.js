import { createRouter, createWebHistory } from "vue-router";
import ProductSimulation from "../views/ProductSimulation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product",
      component: ProductSimulation,
    },
    {
      path: "/cosmetic",
      name: "cosmetic",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CosmeticSimulation.vue"),
    },
  ],
});

export default router;
