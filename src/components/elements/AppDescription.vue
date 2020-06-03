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

.e-description--search-result {
	font-size: 16px;
	font-weight: 500;
	color: #8C8A94;
	text-align: center;
}

@media screen and (min-width: 1200px) {
  .e-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    max-width: 1200px;
    font-size: 15px; 
  }
}
</style>
