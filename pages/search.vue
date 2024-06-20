<template>
  <v-card>
    <v-card-item>
      <v-card-title class="text-center">Resume Creation</v-card-title>
      <v-card-subtitle>My Custom Template</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <form @submit.prevent="submit">
        <div class="flex flex-col gap-2">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>

          <v-select
            v-model="select.value.value"
            :error-messages="select.errorMessage.value"
            :items="items"
            label="Select"
          ></v-select>

          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            label="Option"
            type="checkbox"
            value="1"
          ></v-checkbox>
          <div class="flex gap-4">
            <v-btn color="primary" type="submit"> submit </v-btn>
            <v-btn color="error" @click="handleReset"> clear </v-btn>
          </div>
        </div>
      </form>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
// create a local counter variable that is reactive
const localCount = ref(0);

// get a reference to the counter store
// increment the local counter and the store counter

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});

const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");

name.value.value = "balaji";
phone.value.value = "7010070668";
email.value.value = "balaji@gmail.com";
select.value.value = "Item 1";
checkbox.value.value = "1";

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {});
</script>
