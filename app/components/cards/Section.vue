<template>
  <section
    v-if="currentAnime?.image"
    :id="variant"
    class="min-h-200 bg-cover bg-center"
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.5),rgba(0,0,0,1)),
                      url('http://localhost:8080/${currentAnime.image}')`,
    }"
  >
    <div class="min-h-200 xl:ml-45 sm:ml-10 flex items-end justify-between">
      <div class="text-white pb-20 min-w-1/2 max-sm:pl-5">
        <div
          v-if="variant == 'featured'"
          class="pb-30 max-sm:pb-10 max-sm:pt-10"
        >
          <h2 class="text-3xl font-bold pb-5 max-sm:text-xl max-sm:pb-1">
            Featured in KuhakuAnime
          </h2>
          <p class="text-stone-400">Best featured for you today</p>
          <div class="flex items-start min-w-1/2 pt-5 sm:hidden">
            <slot />
          </div>
        </div>
        <div class="max-sm:pr-5">
          <span class="px-3 py-2 bg-black rounded-xl">Anime-TV</span>
          <h1 class="text-4xl font-bold mt-5">{{ currentAnime.title }}</h1>
          <p class="text-stone-400 my-2">
            {{ currentAnime.type }} |
            <span v-for="(genre, index) in currentAnime.genres" :key="index">
              {{ genre
              }}<span v-if="index < currentAnime.genres.length - 1">, </span>
            </span>
          </p>
          <p class="text-white mb-5 pr-10">
            {{ currentAnime.description }}
          </p>
          <div class="flex gap-5 max-md:text-sm max-md:justify-center">
            <ButtonsMain variant="primary" title="Watch Now" icon="watch" />
            <ButtonsMain
              variant="secondary"
              title="Add to Favorite"
              icon="love"
            />
          </div>
        </div>
      </div>
      <div
        class="flex items-start justify-center mb-20 min-w-1/2 max-sm:hidden"
      >
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  variant: String,
  currentAnime: {
    type: Object,
    default: () => ({}),
  },
});
</script>
