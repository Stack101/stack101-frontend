import stackAPI from '@/api/stack.api.js';

const state = {
  stacks: '',
};

const mutations = {
  SET_STACKS(state, v) {
    state.stacks = v;
  },
};

const actions = {
  async setStacks({ commit }) {
    const result = await stackAPI.getStacks();
    if (!result.isError) {
      commit('SET_STACKS', result.item);
    } else {
      console.log(result.item.statusCode);
    }
  },
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
