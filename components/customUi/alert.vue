<template>
  <div class="rounded-xl" :class="computedClasses" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: value => ['info', 'success', 'warning', 'error'].includes(value)
    }
  },
  computed: {
    computedClasses() {
      return {
        'bg-blue-100': this.type === 'info',
        'bg-green-100': this.type === 'success',
        'bg-yellow-100': this.type === 'warning',
        'bg-red-100': this.type === 'error',
        'border': true,
        'border-blue-400': this.type === 'info',
        'border-green-400': this.type === 'success',
        'border-yellow-400': this.type === 'warning',
        'border-red-400': this.type === 'error',
        'text-blue-700': this.type === 'info',
        'text-green-700': this.type === 'success',
        'text-yellow-700': this.type === 'warning',
        'text-red-700': this.type === 'error',
        'p-4': true,
        'rounded-md': true
      };
    }
  }
};
</script>

<style scoped>
/* Add any additional styling you want here */
</style>
