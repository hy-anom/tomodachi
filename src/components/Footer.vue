<script setup lang="ts">

</script>

<template>
  <section id="footer" class="flex justify-center font-geist">
    <div class="bg-white flex-1 pt-10">
      <div class=" text-base tracking-tight flex flex-row py-10 px-40 gap-6">
        <div class="flex flex-col gap-10 flex-1">
          <div class="flex items-flex-start gap-2">
            <img src="../assets/images/logo-orenji.png" class="w-10 h-10">
            <h2 class="font-bold pt-1">Orenji Studio</h2>
          </div>
          <p class="text-lg tracking-tight"> © 2023 Orenji Studio. All right reserved.</p>
          <p class="max-w-[370px]">Don't spend your time and money to finding visual style and creating designs from zero.
          </p>
          <div class="flex gap-10 mt-3">
            <a href="https://www.instagram.com/orenji.studio/">
              <img src="../assets/images/icons/simple-line-icons_social-instagram.png" class="w-8 h-8 icon-social">
            </a>
            <a href="https://id.linkedin.com/company/orenji-studio">
              <img src="../assets/images/icons/simple-line-icons_social-linkedin.png" class="w-8 h-8 icon-social">
            </a>
            <a href="https://dribbble.com/orenjistudio">
              <img src="../assets/images/icons/simple-line-icons_social-dribbble.png" class="w-8 h-8 icon-social">
            </a>
          </div>
        </div>
        <div class="flex gap-6 flex-1">
          <div class="flex flex-col gap-6 flex-1">
            <a class="font-bold">Orenji Studio</a>
            <a target="_blank" href="https://orenji.studio/">Studio website</a>
            <a target="_blank" href="https://orenji.store/subscribe/">Pro access</a>
            <a target="_blank" href="https://tally.so/r/wkNrkZ">Custom works</a>
            <a target="_blank" href="https://orenji.store/assets-category/freebies/">Freebies</a>
          </div>
          <div class="flex flex-col gap-6 flex-1">
            <a class="font-bold">Products</a>
            <a target="_blank" href="https://orenji.store/assets-category/ui-kit/">UI Kits</a>
            <a target="_blank" href="https://orenji.store/assets-category/illustration/">3D & 2D Illustrations</a>
            <a target="_blank" href="#">Mockups</a>
            <a target="_blank" href="https://orenji.store/assets-category/graphic/icon/">Icons</a>
          </div>
        </div>
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