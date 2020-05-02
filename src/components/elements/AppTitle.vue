<template>
  <h2 :class="`e-title--${titleClass}`">
    {{ label }}
  </h2>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    titleClass: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>
.e-title {
  font-weight: 600;
  line-height: 1.4;
  color: #1A1F27;
  text-align: left;

  &--default {
    @extend .e-title;
    font-size: 22px;
  }
}
</style>