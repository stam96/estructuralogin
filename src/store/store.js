import { createStore } from "vuex";
import jwtDecode from "jwt-decode";
export default createStore({
  state: {
    token: "",
    data: "",
  },
  mutations: {
    obtenerUsuario(state, payload) {
      state.data === "";
      if (payload === "") {
        state.data = "";
      } else {
        state.data = jwtDecode(payload);
        console.log(state.data);
      }
    },
  },
  actions: {
    guardarUsuarioLogin({ commit }, payload) {
      localStorage.setItem("token", payload);
      commit("obtenerUsuario", payload);
    },
  },
});
