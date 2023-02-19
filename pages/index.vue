<template>
  <main>
    <div class="flex flex-col items-stretch h-screen bg-neutral-800">
      <div
        class="grow-0 shrink-0 basis-auto sm:px-6 lg:px-8 py-8
        hidden sm:block sm:text-4xl text-neutral-200"
      >
        2023-02-05-NYCU
      </div>
      <div
        class="relative grow-0 shrink-1 basis-auto
          flex flex-col items-center justify-center h-full min-h-0 m-0 sm:m-14"
      >
        <Flicking class="h-full w-full overflow-hidden"
        ref="flicking" @changed="update_photo_number">
          <div class="absolute h-full w-full flex items-center justify-center">
            <nuxt-img
              src="/IMG_4618-low.jpg"
              alt="img"
              class="max-h-full max-w-full shadow-lg rounded-sm"
            />
          </div>
          <div class="absolute left-[100%] h-full w-full flex items-center justify-center">
            <nuxt-img
              src="/IMG_4619-low.jpg"
              alt="img"
              class="max-h-full max-w-full shadow-lg rounded-sm"
            />
          </div>
          <div class="absolute left-[200%] h-full w-full flex items-center justify-center">
            <nuxt-img
              src="/IMG_4623-low.jpg"
              alt="img"
              class="max-h-full max-w-full shadow-lg rounded-sm"
            />
          </div>
          <div class="absolute left-[300%] h-full w-full flex items-center justify-center">
            <nuxt-img
              src="/IMG_4626-low.jpg"
              alt="img"
              class="max-h-full max-w-full shadow-lg rounded-sm"
            />
          </div>
          <div class="absolute left-[400%] h-full w-full flex items-center justify-center">
            <nuxt-img
              src="/IMG_4630-low.jpg"
              alt="img"
              class="max-h-full max-w-full shadow-lg rounded-sm"
            />
          </div>
        </Flicking>

        <div class="absolute right-4 bottom-4 sm:right-0 sm:bottom-0
          text-base text-neutral-200">
          {{photo_number}}/5
        </div>
        <button
          type="button"
          class="absolute right-0 bg-[rgba(0,0,0,0.3)] rounded-lg
            transition duration-300 hover:bg-[rgba(0,0,0,0.5)]
            hidden lg:block"
          @click="next_photo">
          <svg
            viewBox="0 0 24 24" height="80" width="80"
            fill="none" stroke-linecap="round" stroke-linejoin="round"
            class="stroke-neutral-200 transition duration-300 hover:translate-x-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          class="absolute left-0 bg-[rgba(0,0,0,0.3)] rounded-lg
            transition duration-300 hover:bg-[rgba(0,0,0,0.5)]
            hidden lg:block rotate-180"
          @click="previous_photo">
          <svg viewBox="0 0 24 24" height="80" width="80"
            fill="none" stroke-linecap="round" stroke-linejoin="round"
            class="stroke-neutral-200 transition duration-300 hover:translate-x-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
  data() {
    return {
      photo_number: 1,
      n: 0
    }
  },
  methods: {
    next_photo() {
        this.$refs.flicking.next(500);
    },
    previous_photo() {
      this.$refs.flicking.prev(500);
    },
    update_photo_number() {
      this.photo_number = this.$refs.flicking.index + 1;
    }
  },
  computed: {
    console: () => console,
  },
  mounted() {
    console.log(this.$refs.flicking);
  },
  components: {
    Flicking: Flicking
  }
};
</script>

<style scoped>

/deep/ .flicking-camera { /* deep selector is used to select a child component's class */
  height: 100%;
  width: 100%;
  position: relative;
}

</style>

