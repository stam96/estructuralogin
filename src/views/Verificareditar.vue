<template>
   <section class=" mt-24">
        <div class="max-w-3xl px-36 py-16 mx-auto text-center">
            <h1 class="text-3xl font-semibold ">Ingresar codigo para verificar contraseña</h1>
            <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input type="email" v-model="token" class="px-6 py-2 border rounded-md sm:mx-2 text-center" placeholder="Ingresar codigo para editar">
                <button class="bg-slate text-cyan block w-20 mx-auto py-2 rounded" @click="verificarCuenta">
                    Enviar
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Swal from "sweetalert2";
import router from '../router'
export default {
data(){
  return{
    token:"",
    mensaje:""
  }
}, methods:{
  async verificarCuenta(){
  try {
      const datos = await  axios.get(`/restablecerc/verificar/${this.token}`)
      console.log(datos.data.mensaje)
      this.mensaje = datos.data.mensaje
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
        router.push({name:"Emailcontra"})
        
  } catch (error) {
    console.log(error.response.data.mensaje)
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
