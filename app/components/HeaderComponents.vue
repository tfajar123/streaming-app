<template>
  <nav class="z-50 py-4 h-auto fixed top-0 w-full text-white font-sans">
    <div
      class="max-md:px-5 container mx-auto flex justify-between items-center"
    >
      <h1 class="text-2xl font-bold z-90">KuhakuAnime</h1>
      <ul class="hidden md:flex gap-7">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/">On Going</NuxtLink></li>
        <li><NuxtLink to="/">Discover</NuxtLink></li>
        <li><NuxtLink to="/">Seasonal Anime</NuxtLink></li>
        <li><NuxtLink to="/">About</NuxtLink></li>
      </ul>
      <ul class="hidden md:flex gap-7 md:items-center">
        <li>
          <Icon
            name="material-symbols:search"
            class="scale-150 translate-y-0.5"
          />
        </li>
        <li>
          <ButtonsMain
            variant="primary"
            title="Login"
            icon="none"
            @click="showAuthModal = true"
          />
        </li>
      </ul>
      <div class="md:hidden z-90" @click="isOpen = !isOpen">
        <Icon name="material-symbols:menu" class="scale-150" />
      </div>
    </div>
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="md:hidden flex justify-center bg-black text-white pt-20 pb-10 fixed w-full h-screen top-0 z-50"
      >
        <ul class="flex flex-col gap-10 items-center">
          <li><NuxtLink to="/" @click="isOpen = false">Home</NuxtLink></li>
          <li><NuxtLink to="/" @click="isOpen = false">On Going</NuxtLink></li>
          <li><NuxtLink to="/" @click="isOpen = false">Discover</NuxtLink></li>
          <li>
            <NuxtLink to="/" @click="isOpen = false">Seasonal Anime</NuxtLink>
          </li>
          <li><NuxtLink to="/" @click="isOpen = false">About</NuxtLink></li>
          <li>Login</li>
        </ul>
      </div>
    </Transition>
  </nav>
  <Transition name="slide">
    <ModalsAuth v-if="showAuthModal" @close="showAuthModal = false" />
  </Transition>
</template>

<script setup>
const isOpen = ref(false);
const showAuthModal = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('bg-black/40', window.scrollY > 50);
    nav.classList.toggle('backdrop-blur-xs', window.scrollY > 50);
  });
});
</script>
