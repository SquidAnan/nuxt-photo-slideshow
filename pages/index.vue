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
        <img
            :src="path + photos[n].name"
            alt="img"
            class="max-h-full shadow-lg rounded-sm"
        />
        <div class="absolute right-0 bottom-0 text-base text-neutral-200"> {{photos[n].number}}/5 </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      n: 0, // for iteration
      path: '/images/', // prefix path
      photos: [ // all filenames and its number
        {name:'IMG_4618.jpg', number:1},
        {name:'IMG_4619.jpg', number:2},
        {name:'IMG_4623.jpg', number:3},
        {name:'IMG_4626.jpg', number:4},
        {name:'IMG_4630.jpg', number:5},
      ]
    }
  }
};
</script>

<style scoped></style>
