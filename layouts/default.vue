<template>
  <div class="h-dvh w-dvw overflow-hidden">
    <mainTopBar class="hidden sm:flex h-[75px]" />
    <mainTopBarMobile class="flex sm:hidden h-[50px]" />
    <div
      class="w-full h-[calc(100%-50px)] sm:h-[calc(100%-75px)] mt-[50px] sm:mt-[75px] flex"
    >
      <mainSideBar v-bind:class="count ? 'sm:flex hidden' : 'lg:flex hidden'" />
      <div
        v-bind:class="
          count
            ? 'w-full sm:w-[calc(100%-150px)]'
            : 'w-full lg:w-[calc(100%-150px)]'
        "
        class="flex flex-col h-full overflow-auto pb-[80px] sm:pb-0 bg-indigo-100 p-4"
      >
        <slot></slot>
      </div>
    </div>
    <mainEndBar />
  </div>
</template>

<script>
import { useCounterStore } from "~/store/pinia";

export default {
  computed: {
    count() {
      return useCounterStore().count;
    },
  },
};
</script>
