import statisticAPI from '@/api/statistic.api.js';

const state = {
  statistics: '',
};

const mutations = {
  SET_STATISTICS(state, v) {
    state.statistics = v.sort((a, b) => {
			return a.percentage - b.percentage;
		});
  },
};

const actions = {
  async setStatistics({ commit }, jobDetail) {
    const result = await statisticAPI.getStatistics(jobDetail);
    if (!result.isError) {
      commit('SET_STATISTICS', result.item);
    } else {
      console.log(result.item.statusCode);
      // TODO
    }
  },
};

const getters = {
	getSpecificStatistic: state => {
		const name = state.statistics.reduce((acc, curr) => {
			acc.push(curr.name);
			return acc;
		}, []);

		const percentage = state.statistics.reduce((acc, curr) => {
			acc.push(curr.percentage);
			return acc;
		}, []);

		const totalCnt = state.statistics.reduce((acc, curr) => {
			acc.push(curr.total_count);
			return acc;
		}, []);

		const result = {
			name,
			percentage,
			totalCnt,
		};
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
