import { createRouter, createWebHistory } from "vue-router";
import LibrosView from "../views/LibrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: LibrosView,
    },
    {
      path: "/nuevoLibro",
      name: "nuevoLibro",
      component: () => import("../views/NuevoLibro.vue"),
    },
  ],
});

export default router;
