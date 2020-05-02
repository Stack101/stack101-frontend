<template>
  <section>
    <StackToggleBar />
    <StackCard />
  </section>
</template>

<script>
import StackToggleBar from '@/components/blocks/stack-toggle-bar/StackToggleBar.vue';
import StackCard from '@/components/blocks/stack-card/StackCard.vue';

export default {
  components: {
    StackToggleBar,
    StackCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
