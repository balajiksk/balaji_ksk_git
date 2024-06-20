<template>
     <div class="fixed flex sm:hidden bottom-0 left-0 right-0 px-2">
          <div class="w-full flex justify-evenly bg-gray-500 shadow-2xl rounded-full py-2 shadow-black">
               <nuxt-link to="/" v-bind:class="footer == '/' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
                    class="flex flex-col items-center text-gray rounded-full h-9 w-9 p-2  ">
                    <Icon class="h-full w-full" name="material-symbols:home" />
                    <span class="text-xs hidden">Home</span>
               </nuxt-link>
               <nuxt-link to="/search" v-bind:class="footer == '/search' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
                    class="flex flex-col items-center text-gray rounded-full h-9 w-9 p-2 ">
                    <Icon class="h-full w-full" name="material-symbols:search" />
                    <span class="text-xs hidden">Search</span>
               </nuxt-link>
               <div
                    class="-mt-6 bg-gray-200 rounded-full border-2 border-gray-500 flex flex-col items-center align-center justify-center h-12 w-12">
                    <nuxt-link to="/profile"
                         v-bind:class="footer == '/profile' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
                         class="flex flex-col items-center text-gray rounded-full h-10 w-10 p-2   ">
                         <Icon class="h-full w-full" name="mdi:user" />
                         <span class="text-xs hidden">Profile</span>
                    </nuxt-link>
               </div>
               <nuxt-link to="/video" v-bind:class="footer == '/video' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
                    class="flex flex-col items-center text-gray rounded-full h-9 w-9 p-2  ">
                    <Icon class="h-full w-full" name="mdi:video" />
                    <span class="text-xs hidden">Video</span>
               </nuxt-link>
               <nuxt-link href="/settings" v-bind:class="footer == '/settings' ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'"
                    class="flex flex-col items-center text-gray rounded-full h-9 w-9 p-2 ">
                    <Icon class="h-full w-full" name="material-symbols:settings" />
                    <span class="text-xs hidden">Settings</span>
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
          '$route'(to, from) {
               // Run your function here
               const route = useRoute();
               this.footer = to.fullPath;

          }
     },
     data() {
          return {
               footer: ''
          }
     },
};
</script>

<style scoped>
/* Styles specific to AppBar */
</style>