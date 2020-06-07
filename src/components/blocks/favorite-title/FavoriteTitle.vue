<template>
  <div class="b-favorite-title">
    <AppStrong
      :label="item.name"
      :strong-class="strongClass"
    />
    <AppIcon
      :img-src="favoriteIcon"
      :icon-class="iconClass"
      @click.native.prevent="setClickFavorite"
    />
  </div>
</template>

<script>
import AppStrong from '@/components/elements/AppStrong.vue';
import AppIcon from '@/components/elements/AppIcon.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
		AppStrong,
		AppIcon,
  },

	props: {
		strongClass: {
			type: String,
			default: 'default',
    },
    item: {
      type: Object,
      default: undefined,
    },
    randomStack: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'stack',
    },
	},

	data() {
		return {
      iconClass: 'bookmark',
      isFavorite: false,
		};
  },
  
  computed: {
    favoriteIcon() {
      return this.isFavorite
        ? 'ic_favorite_on_mobile.svg'
        : 'ic_favorite_off_mobile.svg';
		},
  },

  methods: {
    ...mapMutations({ 'setStacks': 'bookmark/SET_STACKS' }),
    ...mapMutations({ 'setCompanies': 'bookmark/SET_COMPANIES' }),
    ...mapMutations({ 'deleteStack': 'bookmark/DELETE_STACKS' }),
    ...mapMutations({ 'deleteCompany': 'bookmark/DELETE_COMPANY' }),
    setClickFavorite() {
      if (this.isFavorite) {
        this.isFavorite = false;
        this.deleteBookmark();
      } else {
        this.isFavorite = true;
        this.addBookmark();
      }
    },
    deleteBookmark() {
      if (this.type === 'company') {
        this.deleteCompany(this.item._id);
      }
      if (this.type === 'stack') {
        this.deleteStack(this.item._id);
      }
    },
    addBookmark() {
      if (this.type === 'company') {
        const stackNameObj = { stackName: this.randomStack };
        const company = Object.assign(this.item, stackNameObj);
        this.setCompanies(company);
      }
      if (this.type === 'stack') {
        this.setStacks(this.item);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.b-favorite-title {
  display: flex;
  align-items: center;
}
</style>
