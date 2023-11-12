<script setup lang="ts">
</script>

<template>
  <section id="hero" class="hero flex flex-col items-center justify-center text-egg-white bg-black bg-no-repeat mb-40">
    <h2 class="text-3xl bg-golden-yellow rounded-lg py-2.5 px-8 font-bold text-black">High quality indeed.</h2>
    <h1 class="text-6xl leading-tight font-bold text-center tracking-tight mt-5">
      VERY HIGH QUALITY <br>
      AND HIGHLY <span class="text-orange">DETAILED</span><br>
      3D MODELS
    </h1>
    <p class="text-xl	font-bold text-center mt-5">
      Colorful, cute, unique and full of personalities characters, ready to charm your design
    </p>
    <div class="flex overflow-hidden w-full mt-10 ribbon-container">
      <div class="hero-ribbon slides"></div>
      <div class="hero-ribbon"></div>
      <div class="hero-ribbon"></div>
      <div class="hero-ribbon"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 1200px;
  background-image: url(../assets/images/hero-bg.png);
  background-size: cover;
  background-position-x: center;
  position: relative;
}

.ribbon-container {
  transform: rotate(-2.2deg);
  position: absolute;
  bottom: -4%;
  
}

.hero-ribbon {
  background-image: url(../assets/images/hero-ribbon.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 1000px;
  height: 110px;
  flex-shrink: 0;
}
.slides {
    animation: bannermove 40s linear infinite;  
    @keyframes bannermove {
      0% {margin-left: 0px;}
      100% {margin-left: -2000px;}
    }
  }

</style>