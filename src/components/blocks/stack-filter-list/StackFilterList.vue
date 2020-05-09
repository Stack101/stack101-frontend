<template>
  <div class="b-stack-filter-list">
    <ul>
      <li
        v-for="(category, index) in categoriesByJobGroup"
        :key="category.index"
        :class="`b-stack-filter-item-${index + 1}`"
        class="b-stack-filter-item"
      >
        <dl>
          <dt>{{ category.title }}</dt>
          <div>
            <dd
              v-for="tab in category.tabs"
              :key="tab.index"
            >
              <AppButton
                :btn-class="getBtnClassName(tab.type)"
                :class="getActiveClassName(category.enTitle, tab.type)"
                :label="tab.title"
                @button-click="setSelectedTab(category.title, tab.type)"
              />
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from '@/components/elements/AppButton.vue';
import cloneDeep from 'lodash.clonedeep';

export default {
  components: {
    AppButton,
  },

  data() {
    return {
      categories: [
        {
          title: '직군',
          enTitle: 'jobGroup',
          tabs: [
            { title: '개발자', type: 'developer' },
            { title: '디자이너', type: 'designer' }
          ],
        },
        {
          title: '직군 상세',
          enTitle: 'jobGroupDetail',
          tabs: [
            { title: 'App 개발', type: 'App' },
            { title: 'Frontend 개발', type: 'Frontend' },
            { title: 'Backend 개발', type: 'Backend' },
            { title: 'UX/UI 디자인', type: 'UI/UX' }
          ],
        },
        {
          title: '스택 종류',
          enTitle: 'stackGroup',
          tabs: [
            { title: 'Language', type: 'language' },
            { title: 'Framework', type: 'framework' }
          ],
        },
        {
          title: '사용툴',
          enTitle: 'toolGroup',
          tabs: [
            { title: 'Prototyping', type: 'prototyping' },
            { title: 'Management', type: 'management' },
            { title: 'Experience', type: 'experience' }
          ],
        }
      ],
      activeTab: {
        jobGroup: 'developer',
        jobGroupDetail: 'App',
        stackGroup: 'language',
      },
      defaultDeveloperTab: {
        jobGroup: 'developer',
        jobGroupDetail: 'App',
        stackGroup: 'language',
        toolGroup: 'prototyping',
      },
      defaultDesignerTab: {
        jobGroup: 'designer',
        jobGroupDetail: 'UI/UX',
        toolGroup: 'prototyping',
      },
    };
  },

  computed: {
    developerGroup() {
      const deepCopyArr = cloneDeep(this.categories);
      const result = deepCopyArr.reduce((acc, curr, i) => {
        acc.push(curr);
        if (curr.enTitle === 'jobGroupDetail') {
          const jobGroupDetailTabs = [];
          curr.tabs.forEach(el => {
            el.type !== 'UI/UX' ? jobGroupDetailTabs.push(el) : null;
          });
          acc[i].tabs = [...jobGroupDetailTabs];
        }
        return acc;
      }, []);
      result.pop();
      return result;
    },

    designerGroup() {
      const deepCopyArr = cloneDeep(this.categories);
      const result = deepCopyArr.reduce((acc, curr, i) => {
        if (curr.enTitle !== 'stackGroup') acc.push(curr);
        if (curr.enTitle === 'jobGroupDetail') {
          const jobGroupDetailTabs = [];
          curr.tabs.forEach(el => {
            el.type === 'UI/UX' ? jobGroupDetailTabs.push(el) : null;
          });
          acc[i].tabs = [...jobGroupDetailTabs];
        }
        return acc;
      }, []);
      return result;
    },

    categoriesByJobGroup() {
      if (this.activeTab.jobGroup === 'developer') {
        return this.developerGroup;
      } else {
        return this.designerGroup;
      }
    },
  },

  watch: {
    activeTab: {
      deep: true,
      immediate: true,
      handler() {
        this.$emit('selected-tab', this.activeTab);
      },
    },
  },

  methods: {
    setSelectedTab(category, tabTitle) {
      switch (category) {
        case '직군':
          if (this.activeTab.jobGroup === 'developer') {
            this.activeTab = this.defaultDesignerTab;
          } else {
            this.activeTab = this.defaultDeveloperTab;
          }
          break;
        case '직군 상세':
          this.activeTab.jobGroupDetail = tabTitle;
          break;
        case '스택 종류':
          this.activeTab.stackGroup = tabTitle;
          break;
        case '사용툴':
          this.activeTab.toolGroup = tabTitle;
          break;
      }
    },
    getBtnClassName(typeStr) {
			if (typeStr.includes('/')) {
				return typeStr.split('/').join('').toLowerCase();
			} else {
				return typeStr.toLowerCase();
			}
    },
    getActiveClassName(enTitle, currentTab) {
      let style = null;
      if (this.activeTab[enTitle] === currentTab) {
        style = `e-button--${this.getBtnClassName(currentTab)}--active`;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.b-stack-filter-list {
  padding: 11px 0;
  border-bottom: 0.5px solid #1A1F27;;
}

.b-stack-filter-item  {
  padding: 9px 0;

  & dl div {
    overflow: hidden;
  }

  & dt {
    display: block;
    float: left;
    margin-top: 4px;
    width: 64px;
    font-size: 12px;
    color: #3B3B3B;
  }

  & dd {
    float: left;
    margin: 0 3px 6px;
  }
}
</style>
