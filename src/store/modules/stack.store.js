import stackAPI from '@/api/stack.api.js';

const state = {
  stackDetails: '',
};

const mutations = {
  SET_TARGET_STACK(state, obj) {
    const bookmarkOption = { isBookmarked: false }; 
    Object.assign(obj, bookmarkOption);
    obj.companies.forEach(el => {
      Object.assign(el, bookmarkOption);
    });
    state.stackDetails = obj;
  },
};

const actions = {
  async setTargetStack({ commit }, id) {
    const result = await stackAPI.getTargetStack(id);
    if (result.isError) {
      console.error(result.item.msg);
    } else {
      const stackDetails = result.item[0];
      commit('SET_TARGET_STACK', stackDetails);
    }
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
