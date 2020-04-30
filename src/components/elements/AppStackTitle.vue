<template>
  <h3 class="e-stack-title">
    {{ label }}
  </h3>
</template>

<script>
export default {
  props: {
    descClass: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.e-stack-title {
  font-size: 16px;
  line-height: 1.45; 
  color: #3B3B3B;
  font-weight: 600;
}
</style>