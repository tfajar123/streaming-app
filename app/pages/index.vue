<template>
  <div class="min-h-screen bg-black">
    <Swiper
      :slides-per-view="1"
      :modules="modules"
      :effect="'fade'"
      :loop="true"
    >
      <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
        ><CardsSection variant="main" :current-anime="anime"
      /></SwiperSlide>
    </Swiper>
    <section id="on-going" class="pb-10">
      <div>
        <div>
          <h2
            class="container mx-auto max-md:pl-5 text-3xl font-bold text-white pb-5"
          >
            On Going
          </h2>
          <div class="cursor-pointer">
            <Swiper
              :slides-per-view="5.2"
              :space-between="20"
              :navigation="true"
              :modules="modules"
              :autoplay="{
                delay: 10000,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                0: {
                  slidesPerView: 1.3,
                  slidesOffsetBefore: 10,
                  slidesOffsetAfter: 10,
                },
                640: {
                  slidesPerView: 2.5,
                  slidesOffsetBefore: 30,
                  slidesOffsetAfter: 30,
                },
                1024: {
                  slidesPerView: 4.5,
                  slidesOffsetBefore: 50,
                  slidesOffsetAfter: 50,
                },
              }"
            >
              <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
                ><CardsMovie variant="onGoing" :anime-item="anime" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <h3
            class="container mx-auto text-2xl font-bold text-white pb-5 py-15"
          >
            Popular of the Week
          </h3>
          <div class="cursor-pointer max-md:text-md">
            <Swiper
              :space-between="20"
              :breakpoints="{
                0: {
                  slidesPerView: 1,
                  slidesOffsetBefore: 10,
                  slidesOffsetAfter: 10,
                },
                640: {
                  slidesPerView: 1.5,
                  slidesOffsetBefore: 30,
                  slidesOffsetAfter: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  slidesOffsetBefore: 50,
                  slidesOffsetAfter: 50,
                },
                1600: {
                  slidesPerView: 3.5,
                  slidesOffsetBefore: 50,
                  slidesOffsetAfter: 50,
                },
              }"
            >
              <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
                ><CardsMovie variant="popular" :anime-item="anime" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    <CardsSection variant="featured" :current-anime="animeItems[activeIndex]">
      <Swiper
        :space-between="20"
        :modules="modules"
        :free-mode="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          0: { slidesPerView: 1.2 },
          500: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
          ><CardsMovie variant="onGoing" :anime-item="anime" />
        </SwiperSlide>
      </Swiper>
    </CardsSection>

    <section id="movies" class="pb-20 max-mx:pb-10">
      <div>
        <h2 class="container mx-auto text-3xl font-bold text-white pb-5">
          Movies
        </h2>
        <div>
          <Swiper
            :space-between="20"
            :navigation="true"
            :modules="modules"
            :breakpoints="{
              0: {
                slidesPerView: 1,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
              },
              640: {
                slidesPerView: 2.5,
                slidesOffsetBefore: 30,
                slidesOffsetAfter: 30,
              },
              1024: {
                slidesPerView: 3.5,
                slidesOffsetBefore: 50,
                slidesOffsetAfter: 50,
              },
              1600: {
                slidesPerView: 4.5,
                slidesOffsetBefore: 50,
                slidesOffsetAfter: 50,
              },
            }"
          >
            <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
              ><CardsMovie variant="movie" :anime-item="anime" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <section id="tv" class="pb-20 max-mx:pb-10">
      <div>
        <h2 class="container mx-auto text-3xl font-bold text-white pb-5">
          Tv Series
        </h2>
        <div>
          <Swiper
            :space-between="20"
            :navigation="true"
            :modules="modules"
            :breakpoints="{
              0: {
                slidesPerView: 1,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
              },
              640: {
                slidesPerView: 2.5,
                slidesOffsetBefore: 30,
                slidesOffsetAfter: 30,
              },
              1024: {
                slidesPerView: 3.5,
                slidesOffsetBefore: 50,
                slidesOffsetAfter: 50,
              },
              1600: {
                slidesPerView: 4.5,
                slidesOffsetBefore: 50,
                slidesOffsetAfter: 50,
              },
            }"
          >
            <SwiperSlide v-for="(anime, index) in animeItems" :key="index"
              ><CardsMovie variant="movie" :anime-item="anime" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, FreeMode, Autoplay, Navigation } from 'swiper/modules';

import animeItemServices from '~/services/animeItemServices';

const modules = [Autoplay, Navigation, FreeMode, EffectFade];

const animeItems = reactive([]);

const activeIndex = ref(0);

function onSlideChange(swiper) {
  activeIndex.value = swiper.activeIndex;
}

const fetchAnimesData = async () => {
  try {
    const result = await animeItemServices.getAnimeItems();
    animeItems.push(...result);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchAnimesData);
</script>

<style></style>
