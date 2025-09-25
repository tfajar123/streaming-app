<template>
  <button
    class="flex gap-3 items-center justify-center p-2 rounded-xl px-5 transition-colors duration-300 ease-in-out cursor-pointer"
    :class="{
      [primary]: variant === 'primary',
      [secondary]: variant === 'secondary',
      [white]: variant === 'white',
    }"
    :type="title === 'Login' || title === 'Register' ? 'submit' : 'button'"
  >
    <Icon
      v-if="icon !== 'none'"
      :name="icon === 'watch' ? watchIcon : loveIcon"
      class="scale-125"
    />
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  variant: String,
  title: String,
  icon: String,
});

const primary = 'bg-green-600 hover:bg-green-800';
const secondary =
  'bg-transparent border border-white hover:bg-white hover:text-black';
const white = 'bg-white text-black hover:bg-gray-400 hover:text-black';
const watchIcon = 'material-symbols:play-circle';
const loveIcon = 'material-symbols:favorite';
</script>
