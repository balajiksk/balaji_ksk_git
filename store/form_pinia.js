// counterStore.js
import { defineStore } from 'pinia';

const getLocalStorageItem = (key, defaultValue) => {
     if (typeof window !== 'undefined') {
          const item = localStorage.getItem(key)
          return item ? JSON.parse(item) : defaultValue
     }
     return defaultValue
}

export const useCounterStore = defineStore({
     id: 'formPinia',
     state: () => ({
          name: getLocalStorageItem('form_name', ""),
          phone: getLocalStorageItem('form_phone', ""),
          email: getLocalStorageItem('form_email', ""),
          select: getLocalStorageItem('form_select', ""),
          checkbox: getLocalStorageItem('form_checkbox', "")
     }),
     actions: {
          postvalue(name, phone, email, select, checkbox) {
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
