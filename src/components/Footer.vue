<script setup lang="ts">

</script>

<template>
  <section id="footer" class="flex justify-center">
    <div class="bg-white flex-1 pt-10">
      <div class=" text-base tracking-tight flex flex-row py-10 px-40 gap-6">
        <div class="flex flex-col gap-6 flex-1">
          <div class="flex items-flex-start gap-2">
            <img src="../assets/images/logo-orenji.png" class="w-10 h-10">
            <h2 class="font-bold pt-1">Orenji Studio</h2>
          </div>
          <p class="max-w-[370px]">Don't spend your time and money to finding visual style and creating designs from zero.
          </p>
          <div class="flex gap-10 mt-3">
            <a href="#">
              <img src="../assets/images/icons/simple-line-icons_social-instagram.png" class="w-8 h-8 icon-social">
            </a>
            <a href="#">
              <img src="../assets/images/icons/simple-line-icons_social-twitter.png" class="w-8 h-8 icon-social">
            </a>
            <a href="#">
              <img src="../assets/images/icons/simple-line-icons_social-dribbble.png" class="w-8 h-8 icon-social">
            </a>
          </div>
        </div>
        <div class="flex gap-6 flex-1">
          <div class="flex flex-col gap-6 flex-1">
            <p class="font-bold">Orenji Studio</p>
            <p>Studio website</p>
            <p>Pro access</p>
            <p>Custom works</p>
            <p>Freebies</p>
          </div>
          <div class="flex flex-col gap-6 flex-1">
            <p class="font-bold">Products</p>
            <p>UI Kits</p>
            <p>3D & 2D Illustrations</p>
            <p>Mockups</p>
            <p>Fonts</p>
          </div>
          <div class="flex flex-col gap-6 flex-1">
            <p class="font-bold">Info</p>
            <p>Terms and condition</p>
            <p>License</p>
            <p>Contact us</p>
            <p>F.A.Q</p>
          </div>
        </div>
      </div>
      <div class="text-center p-10">
        <p class="text-lg tracking-tight"> © 2023 Orenji Studio. All right reserved.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.icon-social {
  transition: ease-in 0.3s;
  &:hover {
    transform:scale(130%);
    filter: brightness(75%);
  }
}</style>