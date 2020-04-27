<template>
  <div class="b-stack-filter-list">
    <ul>
      <li
        v-for="(category, i) in categories"
        :key="category.title"
        :class="`b-stack-filter-item-${i + 1}`"
        class="b-stack-filter-item"
      >
        <dl>
          <dt>{{ category.title }}</dt>
          <div>
            <dd
              v-for="(tab, index) in category.tabs"
              :key="tab.title"
            > 
              <AppButton
                :btn-class="tab.type"
                :class="`b-stack-tab-btns--toggle-${index + 1}`"
                :label="tab.title"
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

export default {
  components: {
    AppButton,
  },

  data() {
    return { 
      categories: [
        {
          title: '직군',
          tabs: [
            { title: '개발자', type: 'developer' },
            { title: '디자이너', type: 'designer' }
          ],
        },
        { 
          title: '직군 상세',
          tabs: [
            { title: 'App 개발', type: 'app' },
            { title: 'Frontend 개발', type: 'frontend' },
            { title: 'Backend 개발', type: 'backend' },
            { title: 'UX/UI 디자인', type: 'uxui' }
          ],
        },
        { 
          title: '스택 종류',
          tabs: [
            { title: 'Language', type: 'language' },
            { title: 'Framework', type: 'framework' }
          ],
        },
        { 
          title: '사용툴',
          tabs: [
            { title: 'Prototyping', type: 'prototyping' },
            { title: 'Management', type: 'management' },
            { title: 'Experience', type: 'experience' }
          ],
        }
      ],
      
    };
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
}

.b-stack-filter-item dl {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.b-stack-filter-item dl > div {
  width: 82%;
}

.b-stack-filter-item dl dt {
  width: 18%;
  font-size: 12px;
  color: #3B3B3B; 
}
.b-stack-filter-item dl dd {
  display: inline-block;
  margin-left: auto;
  margin: 3px 3px;
}
</style>