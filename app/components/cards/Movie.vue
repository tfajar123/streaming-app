<template>
  <div
    v-if="variant == 'onGoing'"
    class="flex flex-col justify-end text-white w-full bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3),rgba(0,0,0,1)),url('/img/naruto.webp')] bg-cover bg-center min-h-100 rounded-2xl"
  >
    <h3 class="px-3 text-lg font-bold">Naruto Shippuden</h3>
    <p class="px-3 pt-2 pb-5 text-sm flex items-center gap-1">
      <Icon name="line-md:star-filled" style="color: #ffd800" />
      7.23 | Action, Adventure
    </p>
  </div>

  <div v-if="variant == 'popular'" class="flex text-white items-center gap-3">
    <h1 class="text-5xl font-bold">1</h1>
    <img
      src="/img/naruto.webp"
      alt="animeImage"
      class="min-h-25 max-w-25 rounded-2xl"
    />
    <div>
      <span
        class="text-sm px-2 py-1 rounded-lg border border-gray-400 text-gray-400"
        >PG-13</span
      >
      <h3 class="text-lg font-bold pt-3">Naruto Shippuden</h3>
      <p class="flex items-center gap-1 text-gray-400">
        <Icon name="tabler:movie" style="color: gray" />Action, Adventure
      </p>
      <p class="flex items-center gap-1 text-gray-400">
        <Icon name="line-md:star-filled" style="color: #ffd800" /><span
          class="font-bold text-white"
          >7.23</span
        >
        | Anime TV
      </p>
    </div>
  </div>

  <div v-if="variant == 'movie'" class="flex flex-col text-white">
    <img
      src="/img/naruto.webp"
      alt="animeImage"
      class="max-h-50 max-w-100 rounded-2xl object-cover"
    />
    <h3 class="text-lg font-bold pt-3">Naruto Shippuden</h3>
    <p class="flex items-center gap-1 text-gray-400"></p>
    <p class="flex items-center gap-1 text-gray-400">
      <Icon name="line-md:star-filled" style="color: #ffd800" /><span
        class="font-bold text-white"
        >7.23</span
      >
      | Action, Adventure
    </p>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: '',
  },
});
</script>
