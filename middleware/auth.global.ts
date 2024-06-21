export default defineNuxtRouteMiddleware(async (to, from) => {
     const userStore = useUserStore();
     console.log(to.fullPath);
     if (to.fullPath == "/login") {
          if (!!userStore.user) {
               return await navigateTo('/');
          }
     }
     else {
          if (!userStore.user) {
               return await navigateTo('/login');
          }
     }


})
