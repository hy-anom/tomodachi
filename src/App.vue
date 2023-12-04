<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Profile from './components/Profile.vue';
import Grids from './components/Grids.vue';
import Promotions from './components/Promotions.vue';
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Profile />
    <Grids />
    <Promotions />
    <Contacts />
    <Footer />
  </div>
</template>

<style>
.effect-button {
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  user-select: none;
}
.effect-button:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10rem;
  z-index: -2;
}
.effect-button:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  transition: all .3s;
  z-index: -1;
  background-color: inherit;
  filter: brightness(85%);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}
.effect-button:hover::before {
  width: 100%;
}
</style>
