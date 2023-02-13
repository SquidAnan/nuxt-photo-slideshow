<template>
  <main>
    <div class="flex flex-col items-stretch h-screen bg-neutral-800 sm:pt-0">
      <div
        class="grow-0 shrink-0 basis-auto sm:px-6 lg:px-8 py-8 text-4xl text-neutral-200"
      >
        2023-02-05-NYCU
      </div>
      <div
        class="relative grow-0 shrink-1 basis-auto flex items-center justify-center h-full min-h-0 m-14 mt-0"
      >
        <Transition name="fade">
          <img
            src="~/assets/IMG_4618.jpg"
            alt="img"
            class="absolute max-h-full shadow-lg rounded-sm"
            v-show="n+1==1"
            key="img1"
          />
          
          <img
              src="~/assets/IMG_4619.jpg"
              alt="img"
              class="absolute max-h-full shadow-lg rounded-sm"
              v-show="n+1==2"
              key="img2"
          />
          <!-- <img
            src="~/assets/IMG_4623.jpg"
            alt="img"
            class="absolute max-h-full shadow-lg rounded-sm"
            v-show="n+1==3"
            key="img3"
          />
          <img
            src="~/assets/IMG_4626.jpg"
            alt="img"
            class="absolute max-h-full shadow-lg rounded-sm"
            v-show="n+1==4"
            key="img4"
          />
          <img
            src="~/assets/IMG_4630.jpg"
            alt="img"
            class="absolute max-h-full shadow-lg rounded-sm"
            v-show="n+1==5"
            key="img5"
          /> -->
        </Transition>

        <div class="absolute right-0 bottom-0 text-base text-neutral-200"> {{photos[n].number}}/5 </div>
        <button type="button" class="absolute right-0 bg-[rgba(0,0,0,0.3)] rounded-lg transition duration-300 hover:bg-[rgba(0,0,0,0.5)]" @click="next_photo">
          <svg viewBox="0 0 24 24" height="80" width="80" fill="none" stroke-linecap="round" stroke-linejoin="round" class="stroke-neutral-200 transition duration-300 hover:translate-x-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <button type="button" class="absolute left-0 bg-[rgba(0,0,0,0.3)] rounded-lg transition duration-300 hover:bg-[rgba(0,0,0,0.5)] rotate-180" @click="previous_photo">
          <svg viewBox="0 0 24 24" height="80" width="80" fill="none" stroke-linecap="round" stroke-linejoin="round" class="stroke-neutral-200 transition duration-300 hover:translate-x-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { version } from 'vue'
export default {
  data() {
    return {
      show: true,
      n: 0,
      n_max: 4,
      path: '~/assets/', // prefix path
      photos: [ // all filenames and its number
        {name:'IMG_4618.jpg', number:1},
        {name:'IMG_4619.jpg', number:2},
        {name:'IMG_4623.jpg', number:3},
        {name:'IMG_4626.jpg', number:4},
        {name:'IMG_4630.jpg', number:5},
      ]
    }
  },
  methods: {
    next_photo() {
      if(this.n < this.n_max) this.n++
      else this.n = 0
    },
    previous_photo() {
      if(this.n > 0) this.n--
      else this.n = this.n_max
    }
  },
  computed: {
    get_photo_name() {
      // return require(this.path + this.photos[this.n].name)
      let s = this.path + this.photos[this.n].name
      console.log(s)
      return require(`${this.path}IMG_4618.jpg`)
    }
  }
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>

