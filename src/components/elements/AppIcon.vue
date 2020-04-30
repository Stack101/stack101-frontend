<template>
  <i :class="iconClass" />
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.e-icon {
  color: #312651;
}
</style>
