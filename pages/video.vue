<template>
     <v-card class="!overflow-visible">
       <v-card-item>
         <v-card-title class="text-center text-primary !text-2xl !mb-8"
           >Create your Stylish Resume</v-card-title
         >
         <form @submit.prevent="submit">
           <div class="flex flex-col gap-2">
             <v-text-field
               clearable
               v-model="clientname.value.value"
               :error-messages="clientname.errorMessage.value"
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
               v-model="role.value.value"
               :error-messages="role.errorMessage.value"
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
               v-model="facebook.value.value"
               :error-messages="facebook.errorMessage.value"
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
               v-model="twitter.value.value"
               :counter="10"
               :error-messages="twitter.errorMessage.value"
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
               v-model="instagram.value.value"
               :counter="10"
               :error-messages="instagram.errorMessage.value"
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
               v-model="aboutme.value.value"
               :counter="300"
               :error-messages="aboutme.errorMessage.value"
               label="About YourSelf"
               variant="outlined"
             >
               <template v-slot:prepend-inner>
                 <v-icon>
                   <Icon name="mingcute:love-fill"></Icon>
                 </v-icon>
               </template>
             </v-textarea>
   
             <!-- <v-select
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
             ></v-checkbox> -->
             <div class="flex gap-4">
               <v-btn color="primary" type="submit"> submit </v-btn>
               <v-btn color="error" @click="handleReset"> clear </v-btn>
             </div>
           </div>
         </form>
       </v-card-item>
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
     //   clientname(value) {
     //     if (value?.length >= 2) return true;
   
     //     return "Name needs to be at least 2 characters.";
     //   },
     //   role(value) {
     //     if (value?.length >= 2) return true;
   
     //     return "Name needs to be at least 2 characters.";
     //   },
     //   facebook(value) {
     //     if (value?.length >= 2) return true;
   
     //     return "Name needs to be at least 2 characters.";
     //   },
     //   twitter(value) {
     //     if (value?.length >= 2) return true;
   
     //     return "Name needs to be at least 2 characters.";
     //   },
     //   instagram(value) {
     //     if (value?.length >= 2) return true;
   
     //     return "Name needs to be at least 2 characters.";
     //   },
     //   aboutme(value) {
     //     if (value?.length >= 100) return true;
   
     //     return "Name needs to be at least 100 characters.";
     //   },
       // phone(value) {
       //   if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
   
       //   return "Phone number needs to be at least 9 digits.";
       // },
       // email(value) {
       //   if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
   
       //   return "Must be a valid e-mail.";
       // },
       // select(value) {
       //   if (value) return true;
   
       //   return "Select an item.";
       // },
       // checkbox(value) {
       //   if (value === "1") return true;
   
       //   return "Must be checked.";
       // },
     },
   });
   
   const clientname = useField("clientname");
   const role = useField("role");
   const facebook = useField("facebook");
   const twitter = useField("twitter");
   const instagram = useField("instagram");
   const aboutme = useField("aboutme");
   // const phone = useField("phone");
   // const email = useField("email");
   // const select = useField("select");
   // const checkbox = useField("checkbox");
   
   // clientname.value.value = "balaji";
   // phone.value.value = "7010070668";
   // email.value.value = "balaji@gmail.com";
   // select.value.value = "Item 1";
   // checkbox.value.value = "1";
   
   // const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
   
   const submit = handleSubmit((values) => {
     console.log(values);
   });
   </script>
   