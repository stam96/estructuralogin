<template>
  <div>
    <div class="bg-gradient-to-r from-slate">
      <nav
        class="
          container
          px-6
          py-4
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-cyan
              md:text-2xl
              hover:text-blue-400
            "
            >Menu
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-cyan md:text-slate font-light sm:text-cyan">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="text-cyan md:text-slate font-light sm:text-cyan">
             <router-link to="/registro">Registro</router-link>
          </li>
          <li class=" bg-slate block w-16 py-1  text-center  text-cyan rounded-md">
           <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
   <router-view/>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>