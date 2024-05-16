<template>
     <div class="bg-white rounded-xl">
          <div class="flex justify-stretch p-2 gap-2 bg-indigo-50 border-2 border-white rounded-md">
               <button v-for="(tab, index) in tabs" :key="index" @click="toggleTab(index)"
                    :class="{ 'bg-indigo-700 text-white': activeTab == index, ' hover:bg-indigo-200': activeTab != index }"
                    class="px-4 py-2 w-full rounded-full transition duration-500 ease-in-out">
                    {{ tab }}
               </button>
          </div>
          <transition name="slide">
               <div class="relative w-full h-[100px] overflow-hidden">
                    <div v-show="activeTab == 0" class="absolute top-0 left-0 w-full h-full flex"
                         :class="{ 'translate-x-0': activeTab == 0, 'translate-x-full': activeTab != 0 }">
                         <div class="w-full p-4">
                              <h2>Content for Tab 1</h2>
                              <p>This is the content for tab 1. You can add any demo content here.</p>
                         </div>
                    </div>
                    <div v-show="activeTab == 1" class="absolute top-0 left-0 w-full h-full flex"
                         :class="{ 'translate-x-0': activeTab == 1, 'translate-x-full': activeTab != 1 }">
                         <div class="w-full p-4">
                              <h2>Content for Tab 2</h2>
                              <p>This is the content for tab 2. You can add any demo content here.</p>
                         </div>
                    </div>
               </div>
          </transition>
     </div>
</template>

<script>
export default {
     data() {
          return {
               activeTab: 0,
               tabs: ['Profile', 'Address']
          };
     },
     methods: {
          toggleTab(index) {
               this.activeTab = index;
          }
     }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
     transition: transform 3s ease;
}

.slide-enter,
.slide-leave-to {
     transform: translateX(0);
}
</style>