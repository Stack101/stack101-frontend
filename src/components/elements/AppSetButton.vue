<template>
  <button
    class="e-set-button"
    :class="`e-set-button--${btnClass}`"
  >
    <i />
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
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
.e-set-button {
  display: flex;
  align-items: center;

  & > span {
    font-size: 14px;
    line-height: 1.4;
    color: #1A1F27;
    font-weight: 600;
  }

  &--filter {
    & > i {
      margin-right: 4px;
      width: 16px;
      height: 16px;
      background: no-repeat 0 / 16px url('~@/assets/images/icon_filter_btn_512x512.png');
    }
  }

  &--reset {
    & > i { 
      margin-right: 6px;
      width: 1px;
      height: 12px;
      background-color: rgba(26, 31, 39, 0.5);
    }
  }
}

</style>
