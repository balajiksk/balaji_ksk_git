<template>
  <nav
    class="bg-gray-800 fixed flex justify-between w-screen top-0 left-0 right-0 items-center px-4 gap-4 z-30"
  >
    <div class="w-100 flex justify-start">
      <button
        @click="mymethod"
        class="flex flex-col lg:hidden bg-white items-center text-gray rounded-full h-9 w-9 p-2"
      >
        <Icon class="h-full w-full" name="mdi:menu" />
        <span class="text-xs hidden">Search</span>
      </button>
      <img src="/ksk.jpg" class="w-8 h-8" alt="" />
      <div @click="pushtologin()" class="text-white text-lg font-medium tracking-wide">KSK APP</div>
    </div>
    <div>
      <v-btn @click=signOut class="!px-0" icon="w">
        <Icon name="mdi:power"></Icon>
      </v-btn>
    </div>
  </nav>
</template>
<script>
import { useCounterStore } from "~/store/pinia";
const userStore = useUserStore();
export default {
  name: "AppBar",
  methods: {
    mymethod() {
      useCounterStore().showhide();
    },
    async pushtologin()
    {
      console.log("Pushtologin");
      await navigateTo("/");
    },
    signOut() {
      userStore.logout();
      useRouter().go(0);
    },
  },
};
</script>

<style scoped>
/* Styles specific to AppBar */
</style>
