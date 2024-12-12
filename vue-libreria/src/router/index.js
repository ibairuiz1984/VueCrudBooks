import { createRouter, createWebHashHistory } from "vue-router";
import LibrosView from "../views/LibrosView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // Cambiado a Hash Mode
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
