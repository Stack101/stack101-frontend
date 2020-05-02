<template>
  <main class="v-detail-company">
    <DetailInfo />
    <CompanyStackList />
  </main>
</template>

<script>
import DetailInfo from '@/components/layout/detail-info/DetailInfo.vue';
import CompanyStackList from '@/components/layout/company-stack-list/CompanyStackList.vue';

export default {
  components: {
    DetailInfo,
    CompanyStackList,
  },
};
</script>

<style lang="scss" scoped>

</style>
