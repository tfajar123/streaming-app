<template>
  <div class="min-h-screen bg-black">
    <CardsSection variant="main" />
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
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
              <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
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
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
              <SwiperSlide><CardsMovie variant="popular" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    <CardsSection variant="featured">
      <Swiper
        :space-between="20"
        :modules="modules"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          0: { slidesPerView: 1.2 },
          500: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }"
      >
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
        <SwiperSlide><CardsMovie variant="onGoing" /> </SwiperSlide>
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
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
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
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
            <SwiperSlide><CardsMovie variant="movie" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Autoplay, Navigation];
</script>

<style></style>
