<script setup lang="ts">

</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-black text-white p-6 font-geist">
    <div class="flex items-center flex-shrink-0 mr-6">
      <span class="font-semibold text-xl tracking-tight hover:text-orange transition-colors">TOMODACHI</span>
      <span class="text-sm ml-3 text-navbar-text-dark">By <strong>Orenji Studio</strong></span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
      </div>
      <div>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange mr-8">
          Our works
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange mr-8">
          Pricing
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange">
          Freebies
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.icon-social {
  transition: ease-in 0.3s;
  &:hover {
    transform:scale(130%);
    filter: brightness(75%);
  }
}
</style>