<template>
  <div class="page flex flex-col sm:gap-5 gap-2">
    <div>
      <h1>Welcome</h1>
      <p>Sign into your profile</p>
      <v-btn @click="signIn">Sign In</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
definePageMeta({
  layout: "login-layout",
  middleware: ["already-auth"],
});

const signIn = async () => {
  await userStore.signIn({
    username: "emilys",
    password: "emilyspass",
  });
  await navigateTo("/", { replace: true });
};
</script>
