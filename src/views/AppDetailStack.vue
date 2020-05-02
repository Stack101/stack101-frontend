<template>
  <main class="v-detail-stack">
    <DetailInfo />
    <CompanyList />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyList from '@/components/layout/company-list/CompanyList.vue';

export default {
  components: {
    DetailInfo,
    CompanyList,
  },
};
</script>

<style lang="scss" scoped>

</style>
