import statisticAPI from '@/api/statistic.api.js';

const state = {
  statistics: '',
};

const mutations = {
  SET_STATISTICS(state, v) {
    state.statistics = v;
  },
};

const actions = {
  async setStatistics({ commit }) {
    const result = await statisticAPI.getStatistics();
    if (!result.isError) {
      commit('SET_STATISTICS', result.item);
    } else {
      console.log(result.item.statusCode);
      // TODO
    }
  },
};

const getters = {
  getSpecificStatistic: state => type => {
    let result;
    switch(type) {
      case 'app':
        result = state.statistics[0];
        break;
      case 'frontend':
        result = state.statistics[1];
        break;
      case 'backend':
        result = state.statistics[2];
        break;
      case 'uxui':
        result = state.statistics[3];
        break;
    }
    return result;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
