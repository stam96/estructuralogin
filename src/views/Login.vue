<template>


<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold text-center sm:text-3xl">Acceso</h1>

    <form class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl" @submit.prevent="acceder">
      <p class="text-lg font-medium">Ingresar con tu cuenta</p>

      <div>
        <label for="email" class="text-sm font-medium">Email</label>

        <div class="relative mt-1">
          <input
            type="email"
            v-model="login.email"
            class="w-full p-4 pr-12 text-sm rounded-lg shadow-sm"
            placeholder="Ingresar email"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="text-sm font-medium">Contraseña</label>

        <div class="relative mt-1">
          <input
            type="password"
            v-model="login.password"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Ingresar password"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button type="submit" class="block w-full px-5 py-3 text-sm font-medium bg-slate text-cyan rounded-lg">
        Acceder
      </button>

      <p class="text-sm text-center">
        Si no estas registrado?
        <router-link to="/registro"><a class="underline">Registrarte</a></router-link>
      </p>
        <p class="text-sm text-center">
        Haz perdido tu contraseña?
        <router-link to="restablecer"><a class="underline" href="">Restablecer contraseña</a></router-link>
      </p>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import Swal from "sweetalert2";
export default {
  data() {
    return {
      login:{
        email:"",
        password:""
      },
        mensaje: "",
        mensajeerror:""
    };
  },
  methods: {
    ...mapActions(["guardarUsuarioLogin"]),
    async acceder(){
      try {
        const res = await axios.post("/login" , this.login)
        this.mensaje = res.data.mensaje 
        console.log(this.mensaje)
        //console.log(res.data.mensaje)
        //console.log(res.data.token)
          this.mensaje = res.data.mensaje
          const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        if (this.mensaje === "Usuario no encontrado email no valido" || this.mensaje === "Constraseña no coinciden") {
          Toast.fire({
          icon: "error",
          title: this.mensaje,
        });
        }else{
        Toast.fire({
          icon: "success",
          title: this.mensaje,
        });
        }
        //token
        const token =res.data.token
        //console.log(token)
        this.guardarUsuarioLogin(token)
        //redireccion
      
      } catch (error) {
        this.mensajeerror = error.response.data.errors[0].msg
        console.log(error.response.data.errors[0].msg)
                Swal.fire({
          icon: "error",
          text: this.mensajeerror,
        });
      }
  },
}
}
</script>