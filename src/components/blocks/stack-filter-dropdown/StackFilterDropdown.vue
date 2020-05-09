<template>
  <div class="b-stack-filter">
    <ul 
      class="b-stack-filter-dropdown" 
    >
      <li
        v-for="tab in tabs"
        :key="tab.title"
      >
        <AppSetButton 
          :btn-class="tab.type"
          :label="tab.title"
        />
      </li>  
      <AppIcon
        class="b-stack-filter-btn"
        :icon-class="iconClass"
        @click.native="toggleDropDown"
      />
    </ul>
    <StackFilterList
      v-show="isToggle"
      @selected-tab="emitEvent"
    />
  </div>
</template>

<script>
import AppSetButton from '@/components/elements/AppSetButton.vue';
import AppIcon from '@/components/elements/AppIcon.vue';
import StackFilterList from '@/components/blocks/stack-filter-list/StackFilterList.vue';

export default {
  components: {
    AppSetButton,
    AppIcon,
    StackFilterList,
  },

  data() {
    return {
      tabs: [
        { title: '필터', type: 'filter' },
        { title: '재설정', type: 'reset' }
      ],
      iconClass: 'gg-chevron-down',
      isToggle: false,
    };
  },

  computed: {
    toggleCondition() {
      return this.isToggle ? 'b-stack-filter-btns--toggle' : 'b-stack-filter-btns';
    },
  },

  methods: {
    toggleDropDown() {
      this.isToggle = !this.isToggle;
      if (this.isToggle) {
        this.iconClass = 'gg-chevron-up';
      } else {
        this.iconClass = 'gg-chevron-down';
      }
    },
    emitEvent(activeTabs) {
      this.$emit('selected-tab', activeTabs);
    },
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

  & > li {
    margin-right: 6px;
  }

  & > i {
    margin-left: auto;
  }
}

@media screen and (min-width: 1200px) {
	.b-stack-filter-dropdown {
    margin: 40px 0 0;
    padding-bottom: 16px;

    & > li {
      margin-right: 14px;
    }
    & > i {
      display: none;
    }
  }
  .b-stack-filter-list {
    display: block !important;
  }
}
</style>