<template>
  <div
    v-if="variant == 'onGoing'"
    class="flex flex-col justify-end text-white w-full bg-cover bg-center min-h-100 rounded-2xl"
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,1)),
                      url('http://localhost:8080/${animeItem.image_port}')`,
    }"
  >
    <h3 class="px-3 text-lg font-bold">{{ animeItem.title }}</h3>
    <p class="px-3 pt-2 pb-5 text-sm flex items-center gap-1">
      <Icon name="line-md:star-filled" style="color: #ffd800" />
      {{ animeItem.rating }} |
      <span v-for="(genre, index) in animeItem.genres" :key="index">
        {{ genre }}<span v-if="index < animeItem.genres.length - 1">, </span>
      </span>
    </p>
  </div>

  <div v-if="variant == 'popular'" class="flex text-white items-center gap-3">
    <h1 class="text-5xl font-bold">1</h1>
    <div class="min-w-25 max-w-25 h-40 rounded-2xl overflow-hidden">
      <img
        :src="`http://localhost:8080/${animeItem.image_port}`"
        alt="animeImage"
        class="w-full h-full object-cover"
      />
    </div>

    <div>
      <span
        class="text-sm px-2 py-1 rounded-lg border border-gray-400 text-gray-400"
        >PG-13</span
      >
      <h3 class="text-lg font-bold pt-3">{{ animeItem.title }}</h3>
      <p class="flex items-center gap-1 text-gray-400">
        <Icon name="tabler:movie" style="color: gray" />
        <span v-for="(genre, index) in animeItem.genres" :key="index">
          {{ genre }}<span v-if="index < animeItem.genres.length - 1">, </span>
        </span>
      </p>
      <p class="flex items-center gap-1 text-gray-400">
        <Icon name="line-md:star-filled" style="color: #ffd800" /><span
          class="font-bold text-white"
          >{{ animeItem.rating }}</span
        >
        | {{ animeItem.type }}
      </p>
    </div>
  </div>

  <div v-if="variant == 'movie'" class="flex flex-col text-white">
    <img
      src="/img/naruto.webp"
      alt="animeImage"
      class="max-h-50 max-w-100 rounded-2xl object-cover"
    />
    <h3 class="text-lg font-bold pt-3">{{ animeItem.title }}</h3>
    <p class="flex items-center gap-1 text-gray-400">
      <Icon name="line-md:star-filled" style="color: #ffd800" /><span
        class="font-bold text-white"
        >{{ animeItem.rating }}</span
      >
      |
      <span v-for="(genre, index) in animeItem.genres" :key="index">
        {{ genre }}<span v-if="index < animeItem.genres.length - 1">, </span>
      </span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: '',
  },
  animeItem: {
    type: Object,
    default: () => ({}),
  },
});
</script>
