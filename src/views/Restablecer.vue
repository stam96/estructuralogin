<template>
   <section class=" mt-24">
        <div class="max-w-3xl px-36 py-16 mx-auto text-center">
            <h1 class="text-3xl font-semibold ">Accion de restablecer contraseña?</h1>
            <p class="max-w-md mx-auto mt-5 ">Ingrese su correo para restablecer contraseña</p>
            <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input type="email" v-model="email" class="px-6 py-2 border rounded-md sm:mx-2 text-center" placeholder="Ingresar email">
                <button class="bg-slate text-cyan block w-20 mx-auto py-2 rounded" @click="restablecerContraseña">
                    Enviar
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios"
import router from '../router'

export default {
data(){
    return{
        email:"",
        mensaje:"",
    }
}, methods:{
    async restablecerContraseña(){
        try {
        const res = await axios.get(`/restablecerc/${this.email}`)
        console.log(res)
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
        if (this.mensaje === "No existente" ||this.mensaje === "Deber ser un correo valido") {
        Toast.fire({
          icon: "error",
          title: this.mensaje,
        });
        }else{
        Toast.fire({
          icon: "success",
          title: this.mensaje,
        });
            router.push({name:"Verificareditar"})
        }
        //console.log(res.data.mensaje)
    
        } catch (error) {
            console.log(error.response.data.mensaje)
            this.mensaje = error.response.data.mensaje
          Swal.fire({
          icon: "error",
          text: this.mensaje,
        })
        }
    }
}
}
</script>
