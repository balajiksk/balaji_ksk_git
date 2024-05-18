// counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'formPinia',
  state: () => ({
    name: "",
    phone: "",
    email: "",
    select: "",
    checkbox: "",
  }),
  actions: {
    postvalue(name,phone,email,select,checkbox) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.select = select;
      this.checkbox = checkbox;
    },
  },
});
