<template>
  <button
    class="flex gap-3 items-center p-2 text-white rounded-xl mt-5 px-5 transition-colors duration-300 ease-in-out cursor-pointer"
    :class="variant === 'watchNow' ? primary : secondary"
  >
    <Icon :name="icon === 'watch' ? watchIcon : loveIcon" class="scale-125" />
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
const watchIcon = 'material-symbols:play-circle';
const loveIcon = 'material-symbols:favorite';
</script>
