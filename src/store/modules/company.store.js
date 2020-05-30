import companyAPI from '@/api/company.api.js';

const state = {
  companyDetails: '',
  bookmarkCompanies: [],
};

const mutations = {
  SET_TARGET_COMPANY(state, v) {
    state.companyDetails = v;
  },
  ADD_BOOKMARK_COMPANY(state, obj) {
    state.bookmarkCompanies.push(obj);
  },
};

const actions = {
  async setTargetCompany({ commit }, id) {
    const result = await companyAPI.getTargetCompany(id);
    if (result.isError) {
      console.error(result.item.msg);
    } else {
      const companyDetails = result.item[0];
      commit('SET_TARGET_COMPANY', companyDetails);
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
