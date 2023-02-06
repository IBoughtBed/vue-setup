import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/user/LoginView.vue")
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/user/LogoutView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/user/RegisterView.vue")
    },
    {
      path: "/register/confirm-email/:key",
      name: "confirm-email",
      component: () => import("../views/user/ConfirmEmailView.vue")
    },
  ]
})

export default router
