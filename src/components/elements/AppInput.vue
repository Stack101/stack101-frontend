<template>
  <input
    class="e-input"
    :type="type"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: null,
        },
        placeholder: {
          type: String,
          default: null,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>