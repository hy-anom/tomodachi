<script setup lang="ts">

</script>

<template>
  <section id="profile" class="flex justify-center w-full">
    <div class="flex flex-col items-center bg-texture-wavy pt-40 flex-1">
      <div class="profile flex justify-center gap-5 text-center">
        <div class="profile-card">
          <div class="card card-1 flex flex-col items-center">
            <div class="profile-icon h-60 w-60 icon icon-1"></div>
            <h3 class="text-xl font-bold uppercase leading-6">Highly detailed 3D character models.</h3>
            <p class="text-xl font-light mt-6 text-gray-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
        <div class="profile-card">
          <div class="card card-2 flex flex-col items-center">
            <div class="profile-icon h-60 w-60 icon icon-2"></div>
            <h3 class="text-xl font-bold uppercase leading-6">3000x3000 px resolution.</h3>
            <p class="text-xl font-light mt-6 text-gray-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
        <div class="profile-card">
          <div class="card card-3 flex flex-col items-center">
            <div class="profile-icon h-60 w-60 icon icon-3"></div>
            <h3 class="text-xl font-bold uppercase leading-6">3D Blender files customizations.</h3>
            <p class="text-xl font-light mt-6 text-gray-50">Very high-quality and highly-detailed 3D character models.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-3xl py-7 text-white bg-lavender rounded-2xl font-bold text-center w-[420px] effect-button">
          Download now
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  height: 480px;
}

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
  padding: 20px 80px;
}

.profile .icon-1 {
  background-image: url(../assets/images/profile-avatars.png);
}

.profile .icon-2 {
  background-image: url(../assets/images/profile-katana.png);
}

.profile .icon-3 {
  background-image: url(../assets/images/profile-blender.png);
  background-size: 75%;
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
  margin-top: -280px;
  padding-top: 280px;
  margin-bottom: -350px;
  padding-bottom: 300px;
}

</style>