import companyAPI from '@/api/company.api.js';

const state = {
  companies: '',
};

const mutations = {
  SET_COMPANIES(state, v) {
    state.companies = v;
  },
};

const actions = {
  async getCompanies({ commit }) {
    const result = companyAPI.getCompanies();
    commit('SET_COMPANIES', result);
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
