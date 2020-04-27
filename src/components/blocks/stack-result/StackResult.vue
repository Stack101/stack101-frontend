<template>
  <div class="b-stack-filter-result">
    <AppCountTitle />
    <ListItem />
  </div>
</template>

<script>
import AppCountTitle from '@/components/elements/AppCountTitle.vue';
import ListItem from '@/components/blocks/list-item/ListItem.vue';

export default {
  components: {
    AppCountTitle,
    ListItem,
  },
};
</script>

<style>
.b-stack-filter-result {
  padding: 26px 0;
}
</style>