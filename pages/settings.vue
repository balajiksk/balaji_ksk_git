<template>
  <v-card class="!overflow-visible">
    <v-card-item>
      <v-card-title class="text-center text-primary !text-2xl !mb-8">
        Create your Stylish Resume
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
            v-model="form.mobile"
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

          <v-text-field
            clearable
            v-model="form.role"
            :rules="[rules.required]"
            label="Role"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="material-symbols:work"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            clearable
            v-model="form.facebook"
            :rules="[rules.required]"
            label="Facebook ID"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="ri:facebook-fill"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            clearable
            v-model="form.twitter"
            :rules="[rules.required]"
            label="Twitter ID"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="prime:twitter"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            clearable
            v-model="form.instagram"
            :rules="[rules.required]"
            label="Instagram ID"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="mdi:instagram"></Icon>
              </v-icon>
            </template>
          </v-text-field>

          <v-textarea
            clearable
            v-model="form.aboutme"
            :rules="[rules.required]"
            label="About Yourself"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="mingcute:love-fill"></Icon>
              </v-icon>
            </template>
          </v-textarea>

          <v-textarea
            clearable
            v-model="form.address"
            :rules="[rules.required]"
            label="Address"
            variant="outlined"
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <Icon name="mdi:location"></Icon>
              </v-icon>
            </template>
          </v-textarea>
          <v-card
            variant="outlined"
            class="!border-gray-300 !mb-4"
            v-for="(field, index) in language"
            :key="index"
          >
            <v-card-item>
              <v-card-title class="mb-4">
                <div class="flex justify-between">
                  <div>Language : {{ index + 1 }}</div>
                  <v-btn
                    v-if="index > 0"
                    type="button"
                    class="w-fit"
                    density="compact"
                    icon
                    color="error"
                    @click="removeField(index)"
                    ><v-icon> <Icon name="mdi:minus"></Icon> </v-icon
                  ></v-btn>
                </div>
              </v-card-title>
              <div class="flex flex-column gap-2">
                <v-text-field
                  clearable
                  v-model="field.language"
                  :rules="[rules.required]"
                  label="Language Name"
                  variant="outlined"
                >
                  <template v-slot:prepend-inner>
                    <v-icon>
                      <Icon name="mdi:language"></Icon>
                    </v-icon>
                  </template>
                </v-text-field>
                <v-radio-group
                  inline
                  class="ml-n4"
                  v-model="field.proficiency"
                  label="Proficiency"
                  :rules="[rules.required2]"
                >
                  <v-radio
                    class="pl-4"
                    :key="index"
                    v-for="(Proficiency, index) in languageProficiency"
                    :label="Proficiency"
                    :value="Proficiency"
                  ></v-radio>
                </v-radio-group>
                <div class="flex flex-column">
                  <v-label :for="field.comfortable">Comfortable</v-label>
                  <div class="flex ms-2">
                    <v-checkbox
                      v-for="(option, index) in languageComfortable"
                      :key="index"
                      :label="option"
                      :value="option"
                      v-model="field.comfortable"
                      :rules="
                        index === languageComfortable.length - 1
                          ? [rules.required3]
                          : [rules.required31]
                      "
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </v-card-item>
          </v-card>
          <div class="flex justify-end align-center gap-2">
            <v-btn
              type="button"
              class="w-fit"
              density="comfortable"
              color="primary"
              rounded
              @click="addField('Proficiency')"
            >
              <v-icon>
                <Icon name="mdi:add"></Icon>
              </v-icon>
              Language
            </v-btn>
          </div>

          <div class="flex mt-5 gap-4 justify-center">
            <v-btn color="primary" @click="submit">Submit</v-btn>
            <v-btn color="error" @click="handleReset">Clear</v-btn>
          </div>
        </div>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios'; // Import axios
export default defineComponent({
  data() {
    return {
      form: {
        clientname: "",
        email: "",
        mobile: "",
        role: "",
        facebook: "",
        twitter: "",
        instagram: "",
        aboutme: "",
        address: "",
        language: [
          {
            language: "",
            comfortable: ["Speak"],
            proficiency: "",
          },
        ],
      },
      languageComfortable: ["Speak", "Read", "Write"],
      languageProficiency: ["Beginner", "Proficient", "Expert"],
      rules: {
        // required: (value) => !!value || "Required.",
        required: (value) => {
          return true;
        },
        required2: (value) => {
          return true;
          return !!value || "Required";
        },
        required3: (value) => {
          return true;
          return value.length > 0 || "At least one option must be selected";
        },
        required31: (value) => {
          return true;
          return value.length > 0 || "";
        },
        email: (value) => {
          return true;
          const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  computed: {
    language() {
      return this.form.language;
    },
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.formRef.validate();
      if (isValid.valid) {
        try {
            // Send form data to the server
            const response = await axios.post('api/resume', {
              form: this.form,
            });

            // Handle response
            if (response.data.success) {
              console.log(response.data.data)
              alert('Form submitted successfully!');
            } else {
              alert('Failed to submit form');
            }
          } catch (error) {
            console.error('An error occurred while submitting the form:', error);
            alert('An error occurred. Please try again.');
          }
      }
    },
    addField(field) {
      if (field == "Proficiency")
        this.form.language.push({
          language: "",
          comfortable: ["Speak"],
          proficiency: "",
        });
    },
    removeField(index) {
      this.form.language.splice(index, 1);
    },
    handleReset() {
      this.$refs.formRef.reset();
    },
  },
});
</script>
