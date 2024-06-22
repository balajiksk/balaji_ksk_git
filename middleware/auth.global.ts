export default defineNuxtRouteMiddleware(async (to, from) => {
     const userStore = useUserStore();
     console.log(to.fullPath);
     if (to.fullPath == "/") {
          if (!!userStore.user) {
               return await navigateTo('/profile');
          }
     }
     else {
          if (!userStore.user) {
               return await navigateTo('/');
          }
     }


})
