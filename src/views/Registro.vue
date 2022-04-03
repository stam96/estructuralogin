<template>
    <div class="w-full px-4 py-10 mx-24  font-bold">
      <h1>REGISTRARSE</h1>
    </div>
  <form class="max-w-md mx-24  " @submit.prevent="registrar">
        <!-- UserName -->
        <div class="relative">
          <input
            type="text"
            v-model="info.username"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Ingresar nombre"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
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
 
        <!-- Email -->
        <div class="relative">
          <!-- Email -->
          <input
            type="email"
            v-model="info.email"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Ingresar email"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
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

          <!-- Password -->
         <div class="relative">
          <input
            type="password"
            v-model="info.password"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Ingresar password"
           
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
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

        <!-- Password Repit-->
         <div class="relative">
          <input
            type="password"
            v-model="info.passrepit"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Repetir password"
           
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
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

          <!-- Registrarse -->

      <div class="flex items-center justify-between mt-5">
        <p class="text-sm text-gray-500">
          Ya tienes una cuenta?
          <router-link to="/login"><a class="underline">Ir a login</a></router-link>
        </p>

        <button
          type="submit"
          class="px-5 py-3 text-sm font-medium bg-slate text-cyan rounded-lg"
        >
        Registrarse
        </button>
      </div>
  </form>

    <div class="fixed top-20 right-0 -z-40 w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
    <img
      class="object-cover"
      src="../../img/undraw_forms_re_pkrt.svg"
      alt=""
    />
    </div>
</template>
<script>
//import { mapActions } from "vuex"
import Swal from "sweetalert2";
import axios from 'axios';
import router from '../router';
export default {
data(){
  return{
    info:{
    username:"",
    email:"",
    password:"",
    passrepit:""
    },
    mensaje:"",
    confirmar:""
  }
}, methods:{
     async registrar(){
       try {
        const res = await axios.post("/registro", this.info);
        //console.log(res.data.mensaje)
        this.mensaje = res.data.mensaje
        console.log(this.mensaje)
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
          Toast.fire({
          icon: "success",
          title: this.mensaje,
        }
        );
        //redireccion
       //console.log(res.data.token)
        this.confirmar = res.data.token
        //console.log(this.confirmar)
        router.push({name:"Codigo"})
      } catch (error) {
        this.mensaje = error.response.data.errors[0].msg
        console.log(error.response.data.errors[0].msg);
            Swal.fire({
          icon: "error",
          text: this.mensaje,
        });
      }
    },
}
}
</script>

<style>

</style>

