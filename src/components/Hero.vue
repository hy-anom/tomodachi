<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      activeTab: 'unique',
      uniqueList: [{
        image: 'miyamoto.png',
        title: 'Shigeru Miyamoto'
      }, {
        image: 'ali.png',
        title: 'Mohammad Ali',
      }, {
        image: 'merkel.png',
        title: 'Angela Merkel',
      }, {
        image: 'messi.png',
        title: 'Leonel Messi',
      }, {
        image: 'lebron.png',
        title: 'Le Bron James',
      }, {
        image: 'elvis.png',
        title: 'Elvis Presley',
      }, {
        image: 'sherlock.png',
        title: 'Sherlock Holmes',
      }, {
        image: 'hatori.png',
        title: 'Hatori Hanzo',
      }, {
        image: 'tokugawa.png',
        title: 'Tokugawa',
      }, {
        image: 'musashi.png',
        title: 'Musashi',
      }, {
        image: 'pope.png',
        title: 'Pope Francis',
      }, {
        image: 'trump.png',
        title: 'Donald Trump',
      }, {
        image: 'freddie.png',
        title: 'Freddie Mercury',
      }, {
        image: 'jobs.png',
        title: 'Steve Jobs',
      }, {
        image: 'chaplin.png',
        title: 'Charlie Chaplin',
      }, {
        image: 'kimjongun.png',
        title: 'Kim Jong Un',
      }],
      professionList: [{
        image: 'clown1.png',
        title: 'Clown 1',
      }, {
        image: 'clown2.png',
        title: 'Clown 2',
      }, {
        image: 'hipster1.png',
        title: 'Hipster 1',
      }, {
        image: 'hipster2.png',
        title: 'Hipster 2',
      }, {
        image: 'soldier1.png',
        title: 'Soldier 1',
      }, {
        image: 'soldier2.png',
        title: 'Soldier 2',
      }, {
        image: 'firefighter1.png',
        title: 'Fire Fighter 1',
      }, {
        image: 'firefighter2.png',
        title: 'Fire Fighter 2',
      }, {
        image: 'doctor1.png',
        title: 'Doctor 1',
      }, {
        image: 'doctor1.png',
        title: 'Doctor 2',
      }, {
        image: 'cop1.png',
        title: 'Cop 1',
      }, {
        image: 'cop2.png',
        title: 'Cop 2',
      }, {
        image: 'chef1.png',
        title: 'Chef 1',
      }, {
        image: 'chef2.png',
        title: 'Chef 2',
      }, {
        image: 'scientist1.png',
        title: 'Scientist 1',
      }, {
        image: 'scientist2.png',
        title: 'Scientist 2',
      },],
      freebiesList: [{
        image: 'avatar1.png',
        title: 'Avatar 1',
      }, {
        image: 'avatar2.png',
        title: 'Avatar 2',
      }, {
        image: 'avatar3.png',
        title: 'Avatar 3',
      }, {
        image: 'avatar4.png',
        title: 'Avatar 4',
      }, {
        image: 'avatar5.png',
        title: 'Avatar 5',
      }, {
        image: 'avatar6.png',
        title: 'Avatar 6',
      }, {
        image: 'avatar7.png',
        title: 'Avatar 7',
      }, {
        image: 'avatar8.png',
        title: 'Avatar 8',
      }, {
        image: 'avatar9.png',
        title: 'Avatar 9',
      }, {
        image: 'avatar10.png',
        title: 'Avatar 10',
      }, {
        image: 'avatar11.png',
        title: 'Avatar 11',
      }, {
        image: 'avatar12.png',
        title: 'Avatar 12',
      }, {
        image: 'avatar13.png',
        title: 'Avatar 13',
      }, {
        image: 'avatar14.png',
        title: 'Avatar 14',
      }, {
        image: 'avatar15.png',
        title: 'Avatar 15',
      }, {
        image: 'avatar16.png',
        title: 'Avatar 16',
      }]
    }
  },
})
</script>

<template>
  <section id="hero"
    class="hero flex flex-col items-center justify-center text-egg-white bg-no-repeat mb-40 relative overflow-hidden">
    <div class="absolute hero-animation-wrapper">
      <div class="flex rotate--2">
        <div class="flex gap-5 mr-5" v-for="count, i in 5" :class="{ 'slides-reverse': i < 1 }" :key="i">
          <div v-for="unique, index in uniqueList" class="w-60 rounded-lg" :key="index">
            <div class="avatar-photo" :style="{ backgroundImage: `url('/tomodachi/avatars-small/unique/${unique.image}')` }" />
          </div>
        </div>
      </div>
      <div class="flex mt-6 rotate--2">
        <div class="flex gap-5 mr-5" v-for="count, i in 5" :class="{ 'slides-hero': i < 1 }" :key="i">
          <div v-for="profession, index in professionList" class="w-60 rounded-lg"
            :keys="index">
            <div class="avatar-photo"
              :style="{ backgroundImage: `url('/tomodachi/avatars-small/profession/${profession.image}')` }" />
          </div>
        </div>
        </div>
      <div class="flex mt-6 rotate--2">
        <div class="flex gap-5 mr-5" v-for="count, i in 5" :class="{ 'slides-reverse': i < 1 }" :key="i">
          <div v-for="freebies, index in freebiesList" class="w-60 rounded-lg" :keys="index">
            <div class="avatar-photo"
              :style="{ backgroundImage: `url('/tomodachi/avatars-small/freebies/${freebies.image}')` }" />
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-3xl bg-golden-yellow rounded-lg py-2.5 px-8 font-bold text-black">Tomodachi 3D Avatar</h2>
    <h1 class="text-6xl uppercase leading-tight font-bold text-center tracking-tight mt-5 font-criteria">
      Cute 3D avatar for your design<br> 
      Highly <span class="text-orange">detailed</span> and<br>
      full of personality
    </h1>
    <div class="flex overflow-hidden w-full mt-10 ribbon-container">
      <div v-for="n, i in 10" class="hero-ribbon flex gap-5" :class="{ 'slides': i < 1 }" :key="i">
        <span>Creativities</span>
        <span>😊</span>
        <span>100% Awesomeness</span>
        <span>😎</span>
        <span>Perfect Toys</span>
        <span>🦄</span>
        <span>New Drops</span>
        <span>👀</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 860px;
  position: relative;
}

.hero-animation-wrapper {
  z-index: -1;
  filter: opacity(0.25);
  margin-top: -90px;
}

.rotate--2 {
  transform: rotate(-2deg);
}

.avatar-photo {
  height: 240px;
  width: 240px;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

.ribbon-container {
  transform: rotate(-2deg);
  position: absolute;
  bottom: -20px;

}

.hero-ribbon {
  width: 720px;
  height: 80px;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: -3%;
}

.slides {
  animation: bannermove 40s linear infinite;

  @keyframes bannermove {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: -2000px;
    }
  }
}

.slides-hero {
  animation: bannermovehero 300s linear infinite;

  @keyframes bannermovehero {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: -2000px;
    }
  }
}

.slides-reverse {
  animation: bannermovereverse 40s linear infinite;

  @keyframes bannermovereverse {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: 4000px;
    }
  }
}
</style>