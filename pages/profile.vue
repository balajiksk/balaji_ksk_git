<template>
  <div class="flex flex-col h-full gap-4">
    <div class="flex items-center justify-center w-full pt-5 pb-20">
      <div
        class="flex flex-wrap justify-between items-center w-full md:w-[7in] md:mh-[9.25in] md:h-full"
      >
        <div
          class="flex flex-col md:w-7/12 w-full bg-blue-900 rounded-t-xl md:rounded-r-none md:rounded-s-xl px-7 py-9 h-full"
        >
          <div class="text-3xl text-white pr-7 font-bold tracking-wider">
            BALAJI
          </div>
          <div class="text-xl text-white pr-7">FRONT END DEVELOPER</div>
          <Icon class="h-8 w-8 text-white" name="material-symbols:code"></Icon>
          <div
            class="h-[25px] -mx-7 bg-white rounded-r-full w-full mt-4 mb-4"
          ></div>
          <div class="flex gap-5">
            <div
              class="flex gap-1 items-center"
              v-for="item in socialMedia"
              :key="item.id"
            >
              <Icon
                class="h-6 w-6 p-1 text-blue-800 bg-white rounded-full"
                :name="item.icon"
              ></Icon>
              <div class="text-xs text-white">{{ item.text }}</div>
            </div>
          </div>
          <div
            class="-mx-7 bg-white rounded-r-full w-full mt-4 mb-4 pl-5 text-lg text-blue-900 font-bold"
          >
            About Me
          </div>
          <div class="w-full text-white pr-7 text-justify text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
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
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-0">
                <div class="w-full text-white pr-7 text-lg font-bold">
                  Source Hov Private Limited
                </div>
                <div class="w-full text-white pr-7 text-md font-semibold">
                  Bill Processor
                </div>
              </div>
              <div class="w-full text-white pr-7 text-justify text-xs">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
              <div
                class="w-full text-white pr-7 text-justify text-lg font-bold"
              >
                2019
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-0">
                <div class="w-full text-white pr-7 text-lg font-bold">
                  W3 web Technologies
                </div>
                <div class="w-full text-white pr-7 text-md font-semibold">
                  Front & Backend Developer
                </div>
              </div>
              <div class="w-full text-white pr-7 text-justify text-xs">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
              <div
                class="w-full text-white pr-7 text-justify text-lg font-bold"
              >
                2021
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-1/12 h-full bg-white">
         <div
            class="w-[40px] bg-white h-full rotate-45 -mt-9 -ml-4"
          ></div>
      </div> -->
        <div
          class="md:w-5/12 w-full bg-white flex flex-col py-9 h-full rounded-b-xl md:rounded-l-none md:rounded-e-xl"
        >
          <div class="flex w-full justify-center mb-10 pt-5">
            <div
              class="w-[180px] h-[180px] overflow-hidden transform bg-black rounded-xl rotate-45"
            >
              <img
                src="/ksk.jpg"
                alt="Diamond Shape Image"
                class="inset-0 w-full h-full object-cover transform -rotate-45"
              />
            </div>
          </div>
          <div class="flex flex-col gap-7 px-7">
            <div class="flex flex-col gap-4">
              <div class="w-full text-blue-800 text-justify text-lg font-bold">
                Contact
              </div>
              <div class="flex flex-col gap-4">
                <div
                  class="flex gap-2 items-center"
                  v-for="item in contact"
                  :key="item.id"
                >
                  <Icon
                    class="h-7 w-7 p-1 text-white bg-blue-800 rounded-full"
                    :name="item.icon"
                  ></Icon>
                  <div class="text-sm font-semibold text-blue-800">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="w-full text-blue-800 text-justify text-lg font-bold">
                Skills
              </div>
              <div
                class="flex flex-wrap items-center justify-evenly w-full gap-y-5"
              >
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="40"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">PHP</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="20"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">JS</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="0"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">HTML</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="20"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">CSS</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="140"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">VUE</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center w-1/3">
                  <div class="relative">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-gray-100"
                        stroke-width="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        class="stroke-blue-800"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="283"
                        stroke-dashoffset="140"
                      />
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <span class="text-xs text-blue-800 font-bold">NUXT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="w-full text-blue-800 text-justify text-lg font-bold">
                Language
              </div>
              <div
                class="flex flex-col items-center justify-evenly w-full gap-5"
              >
                <div class="flex flex-col w-full gap-1">
                  <div
                    class="w-full text-blue-800 text-justify text-xs font-bold"
                  >
                    TAMIL
                  </div>
                  <div class="h-1 bg-gray-200 rounded w-full">
                    <div class="h-full bg-blue-800 rounded w-full"></div>
                  </div>
                </div>
                <div class="flex flex-col w-full gap-1">
                  <div
                    class="w-full text-blue-800 text-justify text-xs font-bold"
                  >
                    ENGLISH
                  </div>
                  <div class="h-1 bg-gray-200 rounded w-full">
                    <div class="h-full bg-blue-800 rounded w-3/4"></div>
                  </div>
                </div>
                <div class="flex flex-col w-full gap-1">
                  <div
                    class="w-full text-blue-800 text-justify text-xs font-bold"
                  >
                    SAURASHTRA
                  </div>
                  <div class="h-1 bg-gray-200 rounded w-full">
                    <div class="h-full bg-blue-800 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
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
      contact: [
        {
          icon: "ic:baseline-email",
          text: "balajiksk153@gmail.com",
        },
        {
          icon: "clarity:mobile-line",
          text: "7010070668",
        },
        {
          icon: "tabler:home",
          text: "Dindigul,Tamilnadu,India",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
