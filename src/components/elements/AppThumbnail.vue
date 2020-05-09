<template>
  <div
    class="e-thumbnail"
    :class="`e-thumbnail--${thumbnailClass}`"
  >
    <span
      class="e-thumbnail-img"
      :style="`background-image:${thumbnailImgSrc}`"
    />
  </div>
</template>

<script>
export default {
  props: {
    thumbnailClass: {
      type: String,
      default: null,
    },
    thumbnailImgSrc: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.e-thumbnail {
  overflow: hidden;
  width: auto;
  height: auto;
  background-image: url('https://crestaproject.com/demo/lontano-pro/wp-content/themes/lontano-pro/images/no-image-slide.png');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  border: 0.5px solid #CCC;
  border-radius: 4px;

  &--large {
    width: 70px;
    height: 70px;
  }

  &--medium {
    width: 56px;
    height: 56px;
  }

	&--small {
		width: 36px;
		height: 36px;
	}

  & > .e-thumbnail-img {
    display: block;
    width: 100%;
    padding-top: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }
}

@media screen and (min-width: 1200px) {
  .e-thumbnail { 
    &--medium {
      width: 76px;
      height: 76px;
    }
  }    
}
</style>
