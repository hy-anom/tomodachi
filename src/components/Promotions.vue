<script setup lang="ts">

</script>

<template>
  <section class="mt-20 pb-10 flex justify-center w-full">
    <div class="bg-shock-texture flex flex-col items-center flex-1">
      <div class="flex flex-col items-center tracking-tight font-criteria">
        <h2 class="text-8xl uppercase font-bold mb-6 text-white">Exclusive</h2>
        <p class="text-6xl uppercase text-white bg-lavender font-bold mb-3 px-2.5 pb-2.5 pt-2.5">Character avatar</p>
        <p class="text-6xl uppercase text-white bg-lavender font-bold p-2.5 pb-2.5 pt-2.5">and profession</p>
      </div>
      <div class="mt-20 flex gap-5">
        <div class="promotion-banner w-[733px] h-[400px] flex items-end justify-center pb-4">
          <div class="flex bg-white rounded-2xl p-3 gap-5 text-xl font-bold w-[350px]">
            <div class="bg-orange text-white py-4 px-6 rounded-2xl effect-button">Characters</div>
            <div class="py-4 px-6 rounded-2lx effect-button">Profession</div>
          </div>
        </div>
        <div class="promotion-card w-[310px] h-[400px] p-6 flex flex-col justify-between">
          <div>
            <img src="../assets/images/icons/blender-logo-small.png" class="w-12 h-12">
            <p class="text-3xl text-white font-bold mt-4 w-60">Our avatar pack include blender files for endless customization and creativity.</p>
          </div>
          <div>
            <p class="text-white text-xl opacity-50">Blender files included</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <div class="text-3xl py-7 text-white bg-lavender rounded-2xl font-bold text-center w-[420px] effect-button">Buy for 19$</div>
      </div>

      <div class="promotion-guys w-[1056px] h-[360px] flex flex-col justify-between items-baseline mt-32 p-12 bg-golden-yellow rounded-3xl">
        <p class="text-3xl uppercase w-[370px] font-bold leading-tight tracking-tight font-criteria">Get our regular avatar for free, download now</p>
        <div class="bg-dark-gray effect-button rounded-2xl text-white text-2xl font-bold px-20 py-6 flex gap-8">
          <span>Download</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promotion-banner {
  background-image: url(../assets/images/promotion-avatars.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.promotion-card {
  background-image: url(../assets/images/promotion-orange.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.promotion-guys {
  background-image: url(../assets/images/promotion-guys.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}

.bg-shock-texture {
  background-image: url(../assets/images/texture/shock-texture.png);
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  margin-bottom: -300px;
  padding-bottom: 300px;
}

</style>