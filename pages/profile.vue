<template>
  <div class="flex flex-col h-full gap-4">
    <img src="/resume.avif" />
    <div class="flex justify-between items-center shadow-lg">
      <div
        class="flex flex-col w-6/12 sm:w-7/12 lg:w-8/12 bg-blue-900 rounded-r-xl px-7 py-9"
      >
        <div class="text-3xl text-white pr-7 font-bold tracking-wider">BALAJI</div>
        <div class="text-xl text-white pr-7">WEB DEVELOPER</div>
        <Icon class="h-8 w-8 text-white pr-7" name="material-symbols:code"></Icon>
        <div
          class="h-[25px] -mx-7 bg-white rounded-r-full w-full mt-4 mb-4"
        ></div>
        <div class="flex gap-5">
          <div
            class="flex gap-1 items-center"
            v-for="item in socialMedia"
            :key="item.id"
          >
            <Icon class="h-3 w-3 text-white" :name="item.icon"></Icon>
            <div class="text-xs text-white">{{ item.text }}</div>
          </div>
        </div>
        <div
          class="-mx-7 bg-white rounded-r-full w-full mt-4 mb-4 pl-5 text-lg text-blue-900 font-bold"
        >
          About Me
        </div>
        <div class="w-full text-white pr-7 text-justify text-xs">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        <div
          class="-mx-7 bg-white rounded-r-full w-full mt-4 mb-4 pl-5 text-lg text-blue-900 font-bold"
        >
          Education
        </div>
        <div class="flex flex-col gap-2">
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            BSC - Computer Science
          </div>
          <div class="w-full text-white pr-7 text-justify text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            2018
          </div>
        </div>
        <div
          class="-mx-7 bg-white rounded-r-full w-full mt-4 mb-4 pl-5 text-lg text-blue-900 font-bold"
        >
          Experience
        </div>
        <div class="flex flex-col gap-2">
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            Source Hov Private Limited - DEVELOPER
          </div>
          <div class="w-full text-white pr-7 text-justify text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            2019
          </div>
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            W3web Technologies - Front End Developer
          </div>
          <div class="w-full text-white pr-7 text-justify text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div class="w-full text-white pr-7 text-justify text-lg font-bold">
            2021
          </div>
        </div>
      </div>
      <div class="w-1/12 h-full bg-white">
        <!-- <div
            class="w-[40px] bg-white h-full rotate-45 -mt-9 -ml-4"
          ></div> -->
      </div>
      <div
        class="w-5/12 sm:w-4/12 bg-white lg:w-3/12 flex items-center justify-start pr-9 h-full"
      >
        <div class="flex items-start justify-start">
          <div
            class="w-[120px] h-[120px] overflow-hidden transform bg-black rounded-xl rotate-45"
          >
            <img
              src="/ksk.jpg"
              alt="Diamond Shape Image"
              class="inset-0 w-full h-full object-cover transform -rotate-45"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          icon: "ri:facebook-fill",
          text: "balajiksk",
        },
        {
          icon: "prime:twitter",
          text: "@balajiksk",
        },
        {
          icon: "mdi:instagram",
          text: "balajiksk",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
