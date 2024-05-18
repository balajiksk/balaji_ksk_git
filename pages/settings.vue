<template>
  <div class="bg-white h-full w-full shadow-2xl rounded-xl p-5">
    <div class="flex flex-col gap-5 w-full">
      <div class="text-blue-800 text-3xl font-semibold w-full text-center">
        Create your Stylish Resume
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Input Box -->
        <div>
          <label
            for="resume_name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              v-model="formData.inputBox"
              id="resume_name"
              name="resume_name"
              type="text"
              autocomplete="off"
              class="block w-full rounded-md outline-0 border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <!-- Textarea -->
        <div>
          <label for="textarea" class="block text-sm font-medium text-gray-700"
            >Textarea</label
          >
          <textarea
            v-model="formData.textarea"
            id="textarea"
            rows="3"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <!-- Select -->
        <div>
          <label for="select" class="block text-sm font-medium text-gray-700"
            >Select</label
          >
          <select
            v-model="formData.select"
            id="select"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <!-- Checkbox -->
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Checkbox</label
          >
          <div class="mt-1">
            <label class="inline-flex items-center">
              <input
                v-model="formData.checkbox"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span class="ml-2">Check me</span>
            </label>
          </div>
        </div>

        <!-- Radio -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Radio</label>
          <div class="mt-1">
            <label class="inline-flex items-center">
              <input
                v-model="formData.radio"
                type="radio"
                name="radio"
                value="option1"
                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span class="ml-2">Option 1</span>
            </label>
            <label class="inline-flex items-center ml-4">
              <input
                v-model="formData.radio"
                type="radio"
                name="radio"
                value="option2"
                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span class="ml-2">Option 2</span>
            </label>
          </div>
        </div>

        <!-- Range -->
        <div>
          <label for="range" class="block text-sm font-medium text-gray-700"
            >Range</label
          >
          <input
            v-model="formData.range"
            type="range"
            id="range"
            min="0"
            max="100"
            class="mt-1 block w-full"
          />
          <span>{{ formData.range }}</span>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from "vue";

const formData = ref({
  inputBox: "",
  textarea: "",
  select: "",
  checkbox: false,
  radio: "",
  range: 50,
});

const handleSubmit = () => {
  console.log("Form Data:", formData.value);
  // Handle form submission
};
</script>

<style lang="scss" scoped></style>
