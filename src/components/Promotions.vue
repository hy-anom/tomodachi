<script setup lang="ts">

</script>

<template>
  <section id="pricing" class="mt-20 pb-10 flex justify-center w-full font-geist">
    <div class="bg-shock-texture flex flex-col items-center flex-1">
      <div class="flex flex-col items-center tracking-tight">
        <h2 class="text-5xl md:text-8xl uppercase font-light mb-6 text-white">Exclusive</h2>
        <p class="text-3xl md:text-6xl uppercase text-white bg-lavender font-bold mb-3 px-2.5 pb-2.5 pt-2.5">UNIQUE CHARACTER avatar
        </p>
      </div>
      <div class="mt-28 flex flex-col md:flex-row items-center gap-5">
        <div class="promotion-banner w-[480px] md:w-[733px] h-[280px] md:h-[400px] flex items-end justify-center pb-4">
        </div>
        <div class="promotion-card w-[210px] md:w-[310px] h-[300px] md:h-[400px] p-6 flex flex-col justify-between">
          <div>
            <p class="text-white text-md md:text-xl mt-2 md:mt-12 w-30 md:w-60">
              Handfully and carefully crafted to mimic each unique and legendary characters.</p>
            <p class="text-white text-md md:text-xl mt-4 w-30 md:w-60">
              All with hyper attention to details. To make your design even more awesome.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://orenjistudio.gumroad.com/l/Tomodachi-AvatarLibrarybyorenji" 
          class="text-xl md:text-3xl text-white bg-lavender rounded-2xl font-bold text-center w-[480px] md:w-[420px] py-4 md:py-7  effect-button"
        >
          Buy now $29
        </a>
      </div>

      <div
        class="promotion-guys w-[480px] md:w-[1056px] h-[360px] flex flex-col justify-start gap-5 md:justify-between items-baseline mt-32 p-12 bg-golden-yellow rounded-3xl">
        <p class="text-3xl uppercase w-[370px] font-bold leading-tight tracking-tight">
          Get our Freebies!
        </p>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://orenjistudio.gumroad.com/l/TomodachiRegulerFreeVersion"
          class="flex bg-black effect-button-reverse rounded-2xl text-white text-xl md:text-2xl font-bold px-10 py-3 gap-4 md:px-20 md:py-6 md:gap-8"
        >
          <span>Download</span>
          <span>
            <img src="../assets/images/icons/arrow-down-icon.png" class="w-8 h-8 icon-social">
          </span>
        </a>
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

.effect-button-reverse {
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  user-select: none;
}

.effect-button-reverse:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10rem;
  z-index: -2;
}

.effect-button-reverse:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  transition: all .3s;
  z-index: -1;
  background-color: #373737;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}

.effect-button-reverse:hover::before {
  width: 100%;
}</style>