<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    gotoPricing() {
      const el = document.getElementById('pricing');
      if(el)
        el.scrollIntoView({behavior: "smooth"});
    }
  }
})
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-black text-white p-6 font-geist">
    <div class="flex items-center flex-shrink-0 mr-0md:mr-6">
      <span class="font-semibold text-xl tracking-tight hover:text-orange transition-colors">TOMODACHI</span>
      <span class="text-sm ml-3 text-navbar-text-dark">By <strong>Orenji Studio</strong></span>
    </div>
    <div class="block lg:hidden">
      <a href="#" @click="gotoPricing" class="block lg:inline-block lg:mt-0 text-teal-200 hover:text-orange">
        Pricing
      </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
      <div class="text-sm lg:flex-grow">
      </div>
      <div>
        <a href="#" @click="gotoPricing" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange mr-8">
          Pricing
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.icon-social {
  transition: ease-in 0.3s;

  &:hover {
    transform: scale(130%);
    filter: brightness(75%);
  }
}
</style>