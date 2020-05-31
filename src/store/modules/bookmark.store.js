const state = {
	stacks: [],
	companies: [],
};

const mutations = {
	SET_COMPANIES(state, v) {
		state.companies.push(v);
		const item = JSON.stringify(state.companies);
		window.localStorage.setItem('bookmarkCompanies', item);
	},
	SET_STACKS(state, v) {
		state.stacks.push(v);
		const item = JSON.stringify(state.stacks);
		window.localStorage.setItem('bookmarkStacks', item);
	},
};

const actions = {};

const getters = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
