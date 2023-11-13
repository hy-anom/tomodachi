<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      activeTab: 'unique',
      uniqueList: [{
        image: '3 - Albert Einstein 3.png',
        title: 'Albert Einstein'
      }, {
        image: '4 - Freddie Mercury 1.png',
        title: 'Freddie Mercury',
      }, {
        image: '6 - Charlie Chaplin 2.png',
        title: 'Charlie Chaplin',
      }, {
        image: '10 - Steve Jobs 1.png',
        title: 'Steve Jobs',
      }, {
        image: '11 - Donald Trump 2.png',
        title: 'Donald Trump',
      }, {
        image: '12 - Kim Jong Un 2 2.png',
        title: 'Kim Jong Un',
      }, {
        image: '14 - Miyamoto Musashi.png',
        title: 'Miyamoto Musashi',
      }, {
        image: '15 - Oda Obunaga 1.png',
        title: 'Oda Obunaga',
      }, {
        image: '16 - Hattori Hanzo 1.png',
        title: 'Hattori Hanzo',
      }, {
        image: '17 - Sherlock Holmes 1.png',
        title: 'Sherlock Holmes',
      }, {
        image: '18 - Le Bron James Ver 2 1.png',
        title: 'Le Bron James',
      }, {
        image: '19 - Elvis Presley.png',
        title: 'Elvis Presley',
      }, {
        image: '21 - Lionel Messi.png',
        title: 'Lionel Messi',
      }, {
        image: '22 - Angela Merkel 1.png',
        title: 'Angela Merkel',
      }, {
        image: '25 - Shigeru Miyamoto 1.png',
        title: 'Shigeru Miyamoto',
      }, {
        image: '29 - Mohammad Ali 2.png',
        title: 'Mohammad Ali',
      }],
      professionList: [{
        image: '1 - Scientist Female - Black - Neutral.png',
        title: 'Scientist Female - Black',
      }, {
        image: '1 - Scientist Male - White - Neutral.png',
        title: 'Scientist Male - White',
      }, {
        image: '2 - Army Female - Black - Neutral.png',
        title: 'Army Female - Black',
      }, {
        image: '2 - Army Male - White - Neutral.png',
        title: 'Army Male - White',
      }, {
        image: '3 - Police Female - White - Neutral.png',
        title: 'Police Female - White',
      }, {
        image: '3 - Police Male - Black - Neutral.png',
        title: 'Police Male - Black',
      }, {
        image: '4 - Firefighter Female - White - Neutral.png',
        title: 'Firefighter Female - White',
      }, {
        image: '4 - Firefighter Male - Black - Neutral.png',
        title: 'Firefighter Male - Black',
      }, {
        image: '5 - Doctor Female - White - Neutral.png',
        title: 'Doctor Female - White',
      }, {
        image: '5 - Doctor Male - White - Neutral.png',
        title: 'Doctor Male - White',
      }, {
        image: '8 - Cheff Female - White - Neutral.png',
        title: 'Cheff Female - White',
      }, {
        image: '8 - Cheff Male - White - Neutral.png',
        title: 'Cheff Male - White',
      }, {
        image: '10 - Programmer Female - Black - Neutral.png',
        title: 'Programmer Female - Black',
      }, {
        image: '10 - Programmer Male - White - Neutral.png',
        title: 'Programmer Male - White',
      }, {
        image: '17 - Clown Female - White - Neutral.png',
        title: 'Clown Female - White',
      }, {
        image: '17 - Clown Male - White - Neutral.png',
        title: 'Clown Male - White',
      },],
      freebiesList: [{
        image: '1 - Ordinary Female - Happy - Black.png',
        title: 'Ordinary Female - Happy - Black',
      },{
        image: '1 - Ordinary Male - Happy - Black.png',
        title: 'Ordinary Male - Happy - Black',
      },{
        image: '1 - Ordinary Male - Neutral - Black.png',
        title: 'Ordinary Male - Neutral - Black',
      },{
        image: '1 - Ordinary Male - Neutral - White.png',
        title: 'Ordinary Male - Neutral - White',
      },{
        image: '2 - Ordinary Male - Neutral - Black.png',
        title: 'Ordinary Male - Neutral - Black',
      },{
        image: '2 - Ordinary Male - Neutral - White.png',
        title: 'Ordinary Male - Neutral - White',
      },{
        image: '3 - Ordinary Female - Happy - Black.png',
        title: 'Ordinary Female - Happy - Black',
      },{
        image: '3 - Ordinary Female - Neutral - White.png',
        title: 'Ordinary Female - Neutral - White',
      },{
        image: '3 - Ordinary Male - Happy - White.png',
        title: 'Ordinary Male - Happy - White',
      },{
        image: '3 - Ordinary Male - Neutral - Black.png',
        title: 'Ordinary Male - Neutral - Black',
      },{
        image: '4 - Ordinary Female - Happy - White.png',
        title: 'Ordinary Female - Happy - White',
      },{
        image: '4 - Ordinary Male - Happy - White.png',
        title: 'Ordinary Male - Happy - White',
      },{
        image: '4 - Ordinary Male - Neutral - Black.png',
        title: 'Ordinary Male - Neutral - Black',
      },{
        image: '4 - Ordinary Male - Neutral - White.png',
        title: 'Ordinary Male - Neutral - White',
      },{
        image: '5 - Ordinary Female - Neutral - White.png',
        title: 'Ordinary Female - Neutral - White',
      },{
        image: '5 - Ordinary Male - Neutral - White.png',
        title: 'Ordinary Male - Neutral - White',
      }]
    }
  },
  methods: {
    changeActiveTab(val: string) {
      this.activeTab = val;
    }
  }
})
</script>

<template>
  <section id="avatar-grids" class=" flex flex-col items-center mt-10 pb-10">
    <div class="w-full">
      <div class="avatar-grids-top" />
      <div class="fade-position h-[100px] w-full bg-gradient-to-b from-golden-yellow to-transparent to-70%"> </div>
      <div class="bg-texture-wavy-grids bg-golden-yellow pt-20">
        <div class=" bg-50-texture-grids w-full pt-20 relative">
          <div class="flex flex-col items-center tracking-tight">
            <h2 class="text-8xl uppercase font-bold mb-6">50 Avatars</h2>
            <p class="text-6xl uppercase text-white bg-lavender font-bold mb-3 px-2.5 pb-2.5 pt-1">counting with</p>
            <p class="text-6xl uppercase text-white bg-lavender font-bold p-2.5 pb-2.5 pt-1">monthly updates</p>
          </div>
          <!-- tab starts -->
          <div class="mt-10 flex flex-col items-center">
            <!-- tab header -->
            <div class="flex bg-white rounded-lg p-5 gap-5 text-3xl font-bold mb-20">
              <div 
                class="bg-ghost-white py-8 px-16 rounded-lg effect-button"
                :class="{ 'bg-orange text-white': activeTab === 'unique' }" 
                @click="changeActiveTab('unique')"
              >
                Characters
              </div>
              <div 
                class="bg-ghost-white py-8 px-16 rounded-lg effect-button"
                :class="{ 'bg-orange text-white': activeTab === 'profession' }"  
                @click="changeActiveTab('profession')"
              >
                Profession
              </div>
              <div 
                class="bg-ghost-white py-8 px-16 rounded-lg effect-button" 
                :class="{ 'bg-orange text-white': activeTab === 'freebies' }"  
                @click="changeActiveTab('freebies')"
              >
                Freebies
              </div>
            </div>
            <!-- tab content -->
            <div class="flex gap-5 mt-5 flex-wrap justify-center overflow-hidden pb-20 pt-5 max-w-[1200px]">
              <template v-if="activeTab === 'unique'">
                <div v-for="unique, index in uniqueList"
                  class="w-60 rounded-lg bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo"
                    :style="{ backgroundImage: `url('/tomodachi/avatars/unique/${unique.image}')` }" />
                  <p class="flex items-center gap-2 mt-2 px-2">
                    <span class="font-bold text-xl">{{ unique.title }}</span>
                    <!-- <span class="inline-block bg-lavender uppercase py-0.5 px-1.5 text-white rounded text-xs">Subs</span> -->
                  </p>
                </div>
              </template>
              <template v-if="activeTab === 'profession'">
                <div v-for="profession, index in professionList"
                  class="w-60 rounded-lg bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo"
                    :style="{ backgroundImage: `url('/tomodachi/avatars/profession/${profession.image}')` }" />
                  <p class="flex items-center gap-2 mt-2 px-2">
                    <span class="font-bold text-xl">{{ profession.title }}</span>
                  </p>
                </div>
              </template>
              <template v-if="activeTab === 'freebies'">
                <div v-for="freebies, index in freebiesList"
                  class="w-60 rounded-lg bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo"
                    :style="{ backgroundImage: `url('/tomodachi/avatars/freebies/${freebies.image}')` }" />
                  <p class="flex items-center gap-2 mt-2 px-2">
                    <span class="font-bold text-xl">{{ freebies.title }}</span>
                  </p>
                </div>
              </template>
            </div>
          </div>
          <!-- tab ends -->
          <div
            class="flex items-end justify-center h-[420px] w-full absolute bottom-12 bg-gradient-to-b from-transparent to-golden-yellow to-70%">
            <button
              class="flex items-center gap-8 bg-black text-xl text-white py-5 px-10 rounded-full font-bold tilt-shake">
              <p><img src="../assets/images/icons/fluent-emoji_megaphone.png" class="w-12 h-12"></p>
              <p>More avatars to come!</p>
              <p class="text-gray-50">Check it out</p>
            </button>
          </div>
        </div>
      </div>
      <div class="avatar-grids-bottom" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.fade-position {
  margin-bottom: -100px;
  position: relative;
  z-index: 20;
  margin-top: -50px;
}

.avatar-grids {
  padding-top: 200px;
}

.avatar-grids-top {
  background-image: url(../assets/images/bg-yellow-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  height: 300px;
  width: 100%;
}

.avatar-grids-bottom {
  background-image: url(../assets/images/bg-yellow-bottom.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  height: 160px;
  width: 100%;
}

.avatar-photo {
  height: 220px;
  width: 220px;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

.photo-1 {
  background-image: url(../assets/images/avatars/avatar-astronaut.png);
}

.bg-50-texture-grids {
  background-image: url(../assets/images/texture/50-texture.png);
  background-repeat: no-repeat;
  background-size: 60%;
  background-position-x: center;
  background-position-y: top;
}

.bg-texture-wavy-grids {
  background-image: url(../assets/images/texture/wavy-texture.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tilt-shake {
  animation: tilt-shaking 2s infinite;

  @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }

    5% {
      transform: rotate(5deg);
    }

    10% {
      transform: rotate(0deg);
    }

    15% {
      transform: rotate(-5deg);
    }

    20% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(5deg);
    }

    30% {
      transform: rotate(0deg);
    }

    35% {
      transform: rotate(-5deg);
    }

    40% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
}

.card-effect {
  transition: all ease-in 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}</style>