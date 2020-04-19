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
    const { data } = await stackAPI.getStacks();
    commit('SET_STACKS', data);
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
