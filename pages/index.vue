<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-5 text-center">Login</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <v-text-field
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>
        </div>
        <div class="mb-4">
          <v-text-field
            v-model="password.value.value"
            counter="20"
            :error-messages="password.errorMessage.value"
            label="Password"
          ></v-text-field>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return "Name needs to be at least 2 characters.";
    },
    password(value) {
      if (value?.length >= 6 && value?.length < 20) return true;

      return "Password min length 6.";
    },
  },
});
const name = useField("name");
const password = useField("password");
const errorMessage = ref("");
const submit = handleSubmit((values) => {
  signin(values.name, values.password);
});
name.value.value = "emilys";
password.value.value = "emilyspass";
async function signin(username, password) {
  let saveresponse = await userStore.signIn({
    username: username,
    password: password,
  });
  if (saveresponse.message) {
    await navigateTo("/profile", { replace: true });
  } else {
    errorMessage.value = "Invalid Credentials.";
    setTimeout(() => {
      errormessage.value = "";
    }, 3000);
  }
}
definePageMeta({
  layout: "login-layout",
});
</script>
