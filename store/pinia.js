// counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'sidebarShow',
  state: () => ({
    count: true,
  }),
  actions: {
    showhide() {
      this.count = !this.count;
    },
  },
});
