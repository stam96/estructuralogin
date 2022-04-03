import { createApp } from "vue";
import store from "./store/store";
import router from "./router";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./tailwind.css";

//axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.baseURL = "https://proyectologinauth.herokuapp.com/api";
createApp(App).use(VueAxios, axios).use(store).use(router).mount("#app");
