<template>
  <p class="e-count-title">
    총 <strong>{{ label }}</strong>건
  </p>  
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style lang="scss" scoped>
.e-count-title {
  font-size: 14px;
  line-height: 1.45;
  color: #1A1F27;
}

.e-count-title strong {
  font-weight: 600;
}
</style>