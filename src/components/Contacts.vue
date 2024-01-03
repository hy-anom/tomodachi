<script setup lang="ts">

</script>

<template>
  <section id="contact" class="flex justify-center w-full mt-20 font-geist">
    <div class="contact-gradient flex-1">
      <div class="bg-texture-flower p-20 flex flex-col items-center flex-1">
        <p class="text-white text-3xl md:text-5xl uppercase font-bold text-center max-w-[800px] leading-normal">
          Request customs avatar
        </p>
        <div class="flex justify-center mt-14">
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://tally.so/r/wkNrkZ"
            class="text-xl md:text-3xl py-3 md:py-7 bg-golden-yellow rounded-2xl font-bold text-center  w-[220px] md:w-[420px] contact-button effect-button"
          >
          Contact us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-gradient {
  background: rgb(252,101,36);
  background: linear-gradient(rgba(252,101,36,1) 0%, rgba(231,38,3,1) 100%);
  box-shadow: 0px -10px 40px 0px #F6531B80;
}

.contact-button {
  box-shadow: 0px 4px 40px 0px #76220580;
}

.bg-texture-flower {
  background-image: url(../assets/images/texture/flower-texture.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>