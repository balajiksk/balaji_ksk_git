// counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'formPinia',
  state: () => ({
    name:  JSON.parse(localStorage.getItem('form_name')) || "",
    phone:  JSON.parse(localStorage.getItem('form_phone')) || "",
    email:  JSON.parse(localStorage.getItem('form_email')) || "",
    select:  JSON.parse(localStorage.getItem('form_select')) || "",
    checkbox:  JSON.parse(localStorage.getItem('form_checkbox')) || ""
  }),
  actions: {
    postvalue(name,phone,email,select,checkbox) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.select = select;
      this.checkbox = checkbox;
      localStorage.setItem('form_name', JSON.stringify(this.name));
      localStorage.setItem('form_phone', JSON.stringify(this.phone));
      localStorage.setItem('form_email', JSON.stringify(this.email));
      localStorage.setItem('form_select', JSON.stringify(this.select));
      localStorage.setItem('form_checkbox', JSON.stringify(this.checkbox));
    },
  },
});
