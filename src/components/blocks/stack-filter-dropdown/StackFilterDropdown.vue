<template>
  <div class="b-stack-filter-dropdown">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.title"
      >
        <AppSetButton 
          :btn-class="tab.type"
          :label="tab.title"
        />
      </li>  
    </ul>
    <AppIcon
      :icon-class="iconClass"
    />
  </div>
</template>

<script>
import AppSetButton from '@/components/elements/AppSetButton.vue';
import AppIcon from '@/components/elements/AppIcon.vue';

export default {
  components: {
    AppSetButton,
    AppIcon,
  },

  data() {
    return {
      tabs: [
        { title: '필터', type: 'filter' },
        { title: '재설정', type: 'reset' }
      ],
      iconClass: 'e-icon--arrow',
      isToggle: false,
    };
  },

  computed: {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.b-stack-filter-dropdown {
  display: flex;
  align-items: center;
  margin: 20px 0 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #1A1F27;
}

.b-stack-filter-dropdown ul {
  display: flex; 
  align-items: center;
}

.b-stack-filter-dropdown ul li {
  margin-right: 6px;
}

.e-icon--arrow {
  margin-left: auto;
  width: 18px;
  height: 18px;
  background: no-repeat 0 / 18px url('~@/assets/images/icon_down_arrow_512x512.png');
}
</style>