<template>
  <button
    class="e-button"
    :class="`e-button--${btnClass}`"
  >
    <span>●</span>
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'app',
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.e-button {
  display: flex;
  align-items: center;
  background-color: white;
  position: relative;
  color: #3B3B3B;
  padding: 0 12px;
  height: 24px;
  font-size: 12px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 40px;
  letter-spacing: -0.015em;
  white-space: nowrap;
  text-align: center;
}

.e-button--app {
  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #FF7F2D;
  }

  &:focus {
    background-color: #FF7F2D;
    color: #ffffff;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--frontend {
  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #0ACF83;
  }

  &:focus {
    background-color: #0ACF83;
    color: #ffffff;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--backend {
  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #4B86FF;
  }

  &:focus {
    background-color: #4B86FF;
    color: #ffffff;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--uxui {
  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #D971FF;
  }

  &:focus {
    background-color: #D971FF;
    color: #ffffff;

    & > *:first-child {
      display: none;
    }
  }
}
</style>
