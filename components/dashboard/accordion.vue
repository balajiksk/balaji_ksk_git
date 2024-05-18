<template>
  <div class="bg-white rounded-xl shadow-xl overflow-hidden">
    <div v-for="(item, index) in items" :key="index" class="border">
      <button
        @click="toggleAccordion(index)"
        class="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
        :class="{ 'bg-gray-100': activeIndex === index }"
      >
        <span>{{ item.title }}</span>
        <Icon
          v-bind:class="activeIndex === index ? '' : 'rotate-180'"
          class="h-5 w-5 ease transition-all duration-500"
          name="mdi:arrow-top-circle"
        />
      </button>
      <div v-if="activeIndex === index" class="p-4 ease duration-500">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { title: "Accordion Item 1", content: "Content for Accordion Item 1" },
        { title: "Accordion Item 2", content: "Content for Accordion Item 2" },
        { title: "Accordion Item 3", content: "Content for Accordion Item 3" },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
