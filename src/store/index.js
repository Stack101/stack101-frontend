import Vue from 'vue';
import Vuex from 'vuex';
import company from './modules/company.store.js';
import stack from './modules/stack.store.js';
import statistic from './modules/statistic.store.js';
import bookmark from './modules/bookmark.store.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    company,
    stack,
    statistic,
		bookmark,
  },
  strict: debug,
});
