import { createWebHistory, createRouter } from "vue-router";
import store from "../store/store";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inicio.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/restablecer",
    name: "Restablecer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restablecer.vue"),
  },
  {
    path: "/email",
    name: "Emailcontra",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Emailcontra.vue"),
  },
  {
    path: "/verificar",
    name: "Verificar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Verificar.vue"),
  },
  {
    path: "/codigo",
    name: "Codigo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Codigo.vue"),
  },
  {
    path: "/restablecertoken",
    name: "Verificareditar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Verificareditar.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.auth);
  if (rutaProtegida && store.state.token === "") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
