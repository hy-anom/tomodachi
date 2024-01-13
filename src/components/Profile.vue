<script setup lang="ts">

</script>

<template>
  <section id="profile" class="flex justify-center w-full font-geist">
    <div class="flex flex-col items-center bg-texture-wavy pt-40 flex-1">
      <div class="profile md:h-[480px] flex flex-col md:flex-row justify-center gap-28 md:gap-5 text-center">
        <div class="profile-card">
          <div class="card card-1 flex flex-col items-center">
            <div class="profile-icon h-40 w-40 md:h-60 md:w-60 icon icon-1"></div>
            <h3 class="text-md md:text-xl font-bold uppercase leading-6">Highly detailed 3D character models.</h3>
            <p class="text-md md:text-xl font-light mt-6 text-black opacity-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
        <div class="profile-card">
          <div class="card card-2 flex flex-col items-center">
            <div class="profile-icon h-40 w-40 md:h-60 md:w-60 icon icon-2"></div>
            <h3 class="text-md md:text-xl font-bold uppercase leading-6">3000x3000 px resolution.</h3>
            <p class="text-md md:text-xl font-light mt-6 text-black opacity-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
        <div class="profile-card">
          <div class="card card-3 flex flex-col items-center">
            <div class="profile-icon h-40 w-40 md:h-60 md:w-60 icon icon-3"></div>
            <h3 class="text-md md:text-xl font-bold uppercase leading-6">INCLUDING TRANSPARENT PNG FILES</h3>
            <p class="text-md md:text-xl font-light mt-6 text-black opacity-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full md:w-[420px] px-4">
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://orenjistudio.gumroad.com/l/Tomodachi-AvatarLibrarybyorenji" 
          class="text-xl mt-20 md:mt-2 md:text-3xl text-white bg-lavender rounded-2xl font-bold text-center w-full py-4 md:py-7 effect-button"
        >
          Buy now $29
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.profile .icon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -70px;
  margin-bottom: 20px;
}

.profile .card {
  height: 420px;
  max-width: 420px;
  background-repeat: no-repeat;
  padding: 20px 60px;
  @media screen and (max-width: 768px) {
    height: 280px;
    max-width: 280px;
    padding: 10px 30px;
    border-radius: 20px;
  }
}

.profile .icon-1 {
  background-image: url(../assets/images/profile-avatars.png);
}

.profile .icon-2 {
  background-image: url(../assets/images/profile-katana.png);
}

.profile .icon-3 {
  background-image: url(../assets/images/transparent-ava.png);
  background-size: 90%;
}

.profile .card-1 {
  background-image: url(../assets/images/profile-bg-1.png);
  background-position: right;
}

.profile .card-2 {
  background-image: url(../assets/images/profile-bg-2.png);
  background-position: center;
}

.profile .card-3 {
  background-image: url(../assets/images/profile-bg-3.png);
  background-position: left;
}

.bg-texture-wavy {
  background-image: url(../assets/images/texture/wavy-texture.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-top: -200px;
  padding-top: 200px;
  margin-bottom: -350px;
  padding-bottom: 300px;
}

</style>