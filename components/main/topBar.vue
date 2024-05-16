<template>
  <nav class="bg-gray-800 fixed flex justify-start w-screen top-0 left-0 right-0 items-center px-4 gap-4 z-30">
    <button @click="mymethod" class="flex flex-col lg:hidden bg-white items-center text-gray rounded-full h-9 w-9 p-2">
      <Icon class="h-full w-full" name="mdi:menu" />
      <span class="text-xs hidden">Search</span>
    </button>
    <img src="/ksk.jpg" class="w-8 h-8" alt="">
    <div class="text-white text-lg font-medium tracking-wide">KSK APP</div>
  </nav>
</template>

<script>
import { useCounterStore } from '~/store/pinia';

export default {
  name: 'AppBar',
  methods: {
    mymethod() {
      useCounterStore().showhide();
    },
  }
}
</script>

<style scoped>
/* Styles specific to AppBar */
</style>