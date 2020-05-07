<template>
  <div class="b-stack-filter-list">
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="category.index"
        :class="`b-stack-filter-item-${index + 1}`"
        class="b-stack-filter-item"
      >
        <dl>
          <dt>{{ category.title }}</dt>
          <div>
            <dd 
              v-for="(tab, index) in category.tabs"
              :key="tab.index"
            > 
              <AppButton
                :btn-class="tab.type"
                :label="tab.title"
                @click="toggleSelected"
                :class="[{ active: isActive }, `b-stack-filter-btns--${index + 1}`]"
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
      isActive: false,
    };
  },

  methods: {
    toggleSelected() {
      this.isActive = !this.isActive;
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