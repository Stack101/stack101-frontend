<template>
  <section class="l-company-list">
    <AppCountTitle :label="totalNum" />
    <ListItem :is-detail="isDetail" />
  </section>
</template>

<script>
import AppCountTitle from '@/components/elements/AppCountTitle.vue';
import ListItem from '@/components/blocks/list-item/ListItem.vue';

export default {
  components: {
    AppCountTitle,
    ListItem,
  },

  data() {
    return {
      totalNum: '23',
      isDetail: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.l-company-list {
  background-color: #fff;
  margin-top: 16px;
  padding: 32px 20px;
}
</style>