<template>
  <div
    class="h-screen bg-gray-500 shadow-2xl shadow-black flex-col gap-3 w-[150px] p-2"
  >
    <div class="flex flex-col gap-3">
      <div class="flex justify-between"></div>
      <nuxt-link
        to="/"
        v-bind:class="
          footer == '/' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
        "
        class="flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"
      >
        <Icon class="h-6 w-6" name="material-symbols:home" />
        <span class="text-xs">Home</span>
      </nuxt-link>
      <nuxt-link
        to="/search"
        v-bind:class="
          footer == '/search' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
        "
        class="flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"
      >
        <Icon class="h-6 w-6" name="material-symbols:search" />
        <span class="text-xs">Search</span>
      </nuxt-link>
      <nuxt-link
        to="/profile"
        v-bind:class="
          footer == '/profile' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
        "
        class="flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"
      >
        <Icon class="h-6 w-6" name="mdi:user" />
        <span class="text-xs">Profile</span>
      </nuxt-link>

      <nuxt-link
        to="#"
        v-bind:class="
          footer == '/video' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
        "
        class="flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"
      >
        <Icon class="h-6 w-6" name="mdi:video" />
        <span class="text-xs">Video</span>
      </nuxt-link>
      <nuxt-link
        href="/settings"
        v-bind:class="
          footer == '/settings' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
        "
        class="flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"
      >
        <Icon class="h-6 w-6" name="material-symbols:settings" />
        <span class="text-xs">Settings</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.footer = this.$route.fullPath;
  },
  watch: {
    $route(to, from) {
      // Run your function here
      const route = useRoute();
      this.footer = to.fullPath;
    },
  },
  data() {
    return {
      footer: "",
    };
  },
};
</script>

<style scoped>
/* Styles specific to AppBar */
</style>
