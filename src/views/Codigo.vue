<template>
   <section class=" mt-24">
        <div class="max-w-3xl px-36 py-16 mx-auto text-center">
            <h1 class="text-3xl font-semibold ">Ingresar codigo para verificar contraseña</h1>
            <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input type="email" v-model="token" class="px-6 py-2 border rounded-md sm:mx-2 text-center" placeholder="Ingresar codigo de verificacion">
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
    mensaje:"",
    mensajeerror:""
  }
}, methods:{
  async verificarCuenta(){
  try {
      const datos = await  axios.get(`/registro/verificar/${this.token}`)
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
        if (this.mensaje === "Cuenta no existente o verificada") {
                Toast.fire({
          icon: "error",
          title: this.mensaje,
        }
        );
        }else{
          Toast.fire({
          icon: "success",
          title: this.mensaje,
        }
        );
        router.push({name:"Login"})
        }


  } catch (error) {
    console.log(error.response.statusText)
    this.mensajeerror = error.response.statusText
                    Swal.fire({
          icon: "error",
          text: this.mensajeerror,
        });

  }
  }
}
}
</script>

<style>

</style>