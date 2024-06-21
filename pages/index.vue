<template>
     <div class="page flex flex-col sm:gap-5 gap-2">
          <div class="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:gap-5 gap-2">
               <DashboardWelcomeTab></DashboardWelcomeTab>
               <CustomUiAlert type="warning">This is an error alert.</CustomUiAlert>
          </div>
          <div class="w-full">
               <DashboardAccordion></DashboardAccordion>
          </div>
          <div class="w-full">
               <DashboardTabs></DashboardTabs>
          </div>
          <div class="w-full">
               {{ userStore.user }}
          </div>

     </div>


</template>

<script lang="ts" setup>

const userStore = useUserStore();
console.log(userStore.token);
</script>