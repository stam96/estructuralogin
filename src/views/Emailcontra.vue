<template>

<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Restablecer Contraseña</h1>
  </div>

  <form class="max-w-md mx-auto mt-8 mb-0 space-y-4" @submit.prevent="restablecer">
      <!-- Email -->
    <div>
      <div class="relative">
        <input
          type="email"
          v-model="datos.email"
          class="w-full p-4 pr-12 text-sm rounded-lg shadow-sm"
          placeholder="Ingresar email"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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

      <!-- Password -->
    <div>
      <div class="relative">
        <input
          type="password"
          v-model="datos.password"
          class="w-full p-4 pr-12 text-sm rounded-lg shadow-sm"
          placeholder="Ingresar password"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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
   <!-- Repetir Password -->
 <div>
      <div class="relative">
        <input
          type="password"
          v-model="datos.passrepit"
          class="w-full p-4 pr-12 text-sm rounded-lg"
          placeholder="Repetir password"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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
   <!-- Menu -->
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="px-5 py-3 text-sm font-medium bg-slate text-cyan rounded-lg"
      >
        Restablecer Contraseña
      </button>
    </div>
  </form>
</div>
</template>
<script>
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

export default {
data(){
    return{
        datos:{
            email:"",
            password:"",
            passrepit:""
        },
        mensaje:"",
        vacio:""
    }
}, methods:{
    async restablecer(){
      try {
        const editar = await axios.put(`reseditar/${this.datos.email}`, this.datos
        )
      
        console.log(editar.data.mensaje)
        this.mensaje = editar.data.mensaje
         //exito
        let Toast = Swal.mixin({
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
            title: editar.data.mensaje,
          })
        router.push({name:"Login"})
      } catch (error) {
        //console.log(error.response.statusText)
        this.vacio = error.response.statusText
        console.log(this.vacio)
        this.mensaje = error.response.data.mensaje  
                  Swal.fire({
          icon: "error",
          text: this.mensaje,
        });

      }
    }
}
}
</script>

<style>

</style>