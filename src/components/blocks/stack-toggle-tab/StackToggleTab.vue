<template>
  <div class="b-stack-toggle-tab">
    <ul
      :class="toggleCondition"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
      >
        <AppButton
          ref="btn"
          :btn-class="tab.type"
          :class="getActiveClassName(tab.type)"
          :label="tab.title"
          @button-click="setType(tab.type, index)"
        />
      </li>
    </ul>
    <AppIcon
      class="b-stack-toggle-btn"
      :icon-class="iconClass"
      @click.native="toggleDropDown"
    />
  </div>
</template>

<script>
import AppButton from '@/components/elements/AppButton.vue';
import AppIcon from '@/components/elements/AppIcon.vue';
export default {
  components: {
    AppButton,
    AppIcon,
  },

  data() {
    return {
      tabs: [
        { title: 'App 개발', color: '#FF7F2D', type: 'app' },
        { title: 'Frontend 개발', color: '#0ACF83', type: 'frontend' },
        { title: 'Backend 개발', color: '#4B86FF', type: 'backend' },
        { title: 'UX/UI 디자인', color: '#D971FF', type: 'uiux' }
      ],
      iconClass: 'gg-chevron-down',
      isToggle: false,
      btnClass: 'app',
			activeTab: 'app',
    };
  },

  computed: {
    toggleCondition() {
      return this.isToggle ? 'b-stack-tab-btns--toggle' : 'b-stack-tab-btns';
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
    setType(currentTab, index) {
			this.activeTab = currentTab;
			this.emitType(currentTab, index);
    },
		emitType(currentTab, index) {
			this.$refs.btn[index].$el.focus();
			this.$emit('chart-type', currentTab);
		},
		getActiveClassName(currentTab) {
			let style = null;
			if (this.activeTab === currentTab) {
				style = `e-button--${currentTab}--active`;
			}
			return style;
		},
  },
};
</script>

<style lang="scss" scoped>
.b-stack-toggle-tab {
  width: 100%;
  position: relative;
}

.b-stack-tab-btns {
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;
  grid-gap: 6px;
  justify-items: start;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.b-stack-tab-btns--toggle {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 6px;
    margin-bottom: 6px;
  }
}

.b-stack-toggle-btn {
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (min-width: 1200px) {  
  .b-stack-toggle-btn {
    display: none;
  }
  .b-stack-tab-btns {
    grid-gap: 14px;
  }
}
</style>
