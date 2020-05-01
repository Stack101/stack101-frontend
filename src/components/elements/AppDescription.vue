<template>
  <p 
    class="e-description"
    :class="`e--description--${descClass}`"
  >
    {{ label }}
  </p>
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
.e-description {
  font-size: 14px;
  line-height: 1.45;
  color: #666;
}
</style>