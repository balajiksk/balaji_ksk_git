<template>
  <v-card class="!overflow-visible">
    <v-card-item>
      <v-card-title class="text-center text-primary !text-2xl !mb-8">
        Register
      </v-card-title>
      <v-form ref="formRef">
        <div class="flex flex-col gap-2">
          <v-text-field
            clearable
            v-model="form.clientname"
            :rules="[rules.required]"
            label="Name"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="mdi:user"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            clearable
            v-model="form.email"
            :rules="[rules.required, rules.email]"
            label="Email Address"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="ic:outline-email"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            clearable
            v-model="form.password"
            :rules="[rules.required]"
            label="Mobile Number"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="clarity:mobile-solid"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <div class="flex mt-5 gap-4 justify-center">
            <v-btn color="primary" @click="submit">Submit</v-btn>
          </div>
        </div>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios"; // Import axios
export default defineComponent({
  data() {
    return {
      form: {
        clientname: "",
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          return true;
          const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.formRef.validate();
      if (isValid.valid) {
        try {
          // Send form data to the server
          const response = await axios.post("api/resume", {
            form: this.form,
          });

          // Handle response
          if (response.data.success) {
            console.log(response.data.data);
            alert("Form submitted successfully!");
          } else {
            alert("Failed to submit form");
          }
        } catch (error) {
          console.error("An error occurred while submitting the form:", error);
          alert("An error occurred. Please try again.");
        }
      }
    },
  },
});
</script>
