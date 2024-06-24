import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cookies from 'universal-cookie';
import type { Customer, Login, User } from '~/types';

const cookies = new Cookies();

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const token = ref(cookies.get('MY_COOKIE') || null);

  const setToken = (data?: string) => {
    console.log(data);
    if (data) {
      token.value = data;
      cookies.set('MY_COOKIE', data, { path: '/', maxAge: 60 * 60 * 60 });
    } else {
      token.value = null;
      cookies.remove('MY_COOKIE', { path: '/' });
    }
  };

  const setUser = (data?: any) => {
    user.value = data || null;
  };

  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<User>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: data,
      });
      setToken(res.token);
      await fetchCustomer();
    } catch (error) {
      setToken();
      setUser();
      console.log(error);
    }
  };

  const fetchCustomer = async () => {
    if (token.value) {
      try {
        const res = await $fetch<Customer>('https://dummyjson.com/users/1');
        setUser(res);
      } catch (error) {
        setUser();
        console.log(error);
      }
    }
  };

  const logout = async () => {
    setToken();
    setUser();
  };

  return { user, token, logout, signIn, fetchCustomer, setUser, setToken };
});
