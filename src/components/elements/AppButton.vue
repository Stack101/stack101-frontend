<template>
  <button
    :class="`e-button--${btnClass}`"
    @click="$emit('button-click')"
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
  background-color: #FFF;
  position: relative;
  color: #3B3B3B;
  padding: 0 12px;
  height: 24px;
  font-size: 12px;
  border: 1px solid #DDD;
  box-sizing: border-box;
  border-radius: 40px;
  white-space: nowrap;
  text-align: center;
}

.e-button--app {
  @extend .e-button;

  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #FF7F2D;
  }

  &:focus {
    border-color: #FF7F2D;
    background-color: #FF7F2D;
    color: #FFF;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--frontend {
  @extend .e-button;

  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #0ACF83;
  }

  &:focus {
    border-color: #0ACF83;
    background-color: #0ACF83;
    color: #FFF;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--backend {
  @extend .e-button;

  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #4B86FF;
  }

  &:focus {
    border-color: #4B86FF;
    background-color: #4B86FF;
    color: #FFF;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--uxui {
  @extend .e-button;

  & > *:first-child {
    padding-right: 5px;
    font-size: 6.5px;
    color: #D971FF;
  }

  &:focus {
    border-color: #D971FF;
    background-color: #D971FF;
    color: #FFF;

    & > *:first-child {
      display: none;
    }
  }
}

.e-button--developer,
.e-button--designer,
.e-button--language,
.e-button--framework,
.e-button--prototyping,
.e-button--management,
.e-button--experience,
.e-button--cancel,
.e-button--delete {
  @extend .e-button;

  & > *:first-child {
    display: none;
  }

  &:focus {
    background-color: #DDD;
    color: #3B3B3B;
  }
}

.e-button--cancel {
	width: 43px;
	height: 36px;
	font-size: 16px;
	font-weight: 300;
	border: none;
}

.e-button--delete {
	border: none;
	padding: 0;
}
</style>
