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
      },{
        image: 'avatar2.png',
        title: 'Avatar 2',
      },{
        image: 'avatar3.png',
        title: 'Avatar 3',
      },{
        image: 'avatar4.png',
        title: 'Avatar 4',
      },{
        image: 'avatar5.png',
        title: 'Avatar 5',
      },{
        image: 'avatar6.png',
        title: 'Avatar 6',
      },{
        image: 'avatar7.png',
        title: 'Avatar 7',
      },{
        image: 'avatar8.png',
        title: 'Avatar 8',
      },{
        image: 'avatar9.png',
        title: 'Avatar 9',
      },{
        image: 'avatar10.png',
        title: 'Avatar 10',
      },{
        image: 'avatar11.png',
        title: 'Avatar 11',
      },{
        image: 'avatar12.png',
        title: 'Avatar 12',
      },{
        image: 'avatar13.png',
        title: 'Avatar 13',
      },{
        image: 'avatar14.png',
        title: 'Avatar 14',
      },{
        image: 'avatar15.png',
        title: 'Avatar 15',
      },{
        image: 'avatar16.png',
        title: 'Avatar 16',
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
  <section id="avatar-grids" class=" flex flex-col items-center mt-10 pb-10 font-geist">
    <div class="w-full">
      <div class="avatar-grids-top" />
      <div class="fade-position h-[100px] w-full bg-gradient-to-b from-golden-yellow to-transparent to-70%"> </div>
      <div class="bg-texture-wavy-grids bg-golden-yellow pt-20">
        <div class=" bg-50-texture-grids w-full pt-20 relative">
          <div class="flex flex-col items-center tracking-tight">
            <h2 class="text-6xl md:text-8xl uppercase mb-6">50 Avatars</h2>
            <div class="px-4">
              <p class="text-3xl md:text-6xl uppercase bg-lavender text-center text-white py-2.5 px-2.5">And WILL CONTINUE UPDATED!</p>
            </div>
          </div>
          <!-- tab starts -->
          <div class="mt-10 flex flex-col items-center pb-32 md:mt-20 ">
            <!-- tab header -->
            <div class="flex bg-white rounded-lg p-2 md:p-5 gap-2 md:gap-5 text:xl md:text-3xl font-bold mb-8 md:mb-20">
              <div 
                class="bg-ghost-white py-3.5 px-4 md:py-8 md:px-16 rounded-lg effect-button"
                :class="{ 'bg-orange text-white': activeTab === 'unique' }" 
                @click="changeActiveTab('unique')"
              >
                Characters
              </div>
              <div 
                class="bg-ghost-white py-3.5 px-4 md:py-8 md:px-16 rounded-lg effect-button"
                :class="{ 'bg-orange text-white': activeTab === 'profession' }"  
                @click="changeActiveTab('profession')"
              >
                Profession
              </div>
              <div 
                class="bg-ghost-white py-3.5 px-4 md:py-8 md:px-16 rounded-lg effect-button" 
                :class="{ 'bg-orange text-white': activeTab === 'freebies' }"  
                @click="changeActiveTab('freebies')"
              >
                Freebies
              </div>
            </div>
            <!-- tab content -->
            <div class="flex gap-2 md:gap-5 mt-5 flex-wrap justify-center overflow-hidden pb-20 pt-5 px-4 max-w-[1200px]">
              <template v-if="activeTab === 'unique'">
                <div v-for="unique, index in uniqueList"
                  class="half-card-col grow md:grow-0 h-52 md:w-60 md:h-[17rem] rounded-[20px] bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo w-full h-full"
                    :style="{ backgroundImage: `url('/avatars/unique/${unique.image}')` }" />
                  <p class="flex items-center justify-center gap-2 mt-2 px-2">
                    <span class="font-bold text-sm md:text-lg">{{ unique.title }}</span>
                    <!-- <span class="inline-block bg-lavender uppercase py-0.5 px-1.5 text-white rounded text-xs">Subs</span> -->
                  </p>
                </div>
              </template>
              <template v-if="activeTab === 'profession'">
                <div v-for="profession, index in professionList"
                  class="half-card-col grow md:grow-0 h-52 md:w-60 md:h-[17rem] rounded-[20px] bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo w-full h-full"
                    :style="{ backgroundImage: `url('/avatars/profession/${profession.image}')` }" />
                  <p class="flex items-center justify-center gap-2 mt-2 px-2">
                    <span class="font-bold text-sm md:text-lg">{{ profession.title }}</span>
                  </p>
                </div>
              </template>
              <template v-if="activeTab === 'freebies'">
                <div v-for="freebies, index in freebiesList"
                  class="half-card-col grow md:grow-0 h-52 md:w-60 md:h-[17rem] rounded-[20px] bg-white flex flex-col items-flex-start p-2.5 card-effect cursor-pointer"
                  :keys="index">
                  <div class="avatar-photo w-full h-full"
                    :style="{ backgroundImage: `url('/avatars/freebies/${freebies.image}')` }" />
                  <p class="flex items-center justify-center gap-2 mt-2 px-2">
                    <span class="font-bold text-sm md:text-lg">{{ freebies.title }}</span>
                  </p>
                </div>
              </template>
            </div>
          </div>
          <!-- tab ends -->
          <div
            class="flex items-end justify-center h-[420px] w-full absolute bottom-12 px-4 bg-gradient-to-b from-transparent to-golden-yellow to-70%">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://orenjistudio.gumroad.com/l/Tomodachi-AvatarLibrarybyorenji"
              class="flex items-center gap-3 md:gap-8 bg-black text-md md:text-xl text-white py-5 px-10 rounded-full font-bold tilt-shake"
            >
              <p><img src="../assets/images/icons/fluent-emoji_megaphone.png" class="w-8 h-8 md:w-12 md:h-12"></p>
              <p class="text-sm md:text-md">Browse more avatars!</p>
              <p class="text-white opacity-50 text-sm md:text-md">Check it out</p>
            </a>
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
}

.avatar-grids {
  padding-top: 200px;
}

.half-card-col {
  @media screen and (max-width: 640px) {
    flex-basis: calc(50% - 0.5rem);
  }
}

.avatar-grids-top {
  background-image: url(../assets/images/bg-yellow-top.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: bottom;
  height: 300px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
}

.avatar-grids-bottom {
  background-image: url(../assets/images/bg-yellow-bottom.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  height: 120px;
  width: 100%;
}

.avatar-photo {
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