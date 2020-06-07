const state = {
	stacks: [],
	companies: [],
};

const mutations = {
  INIT_STACKS(state) {
    const jsonItems = window.localStorage.getItem('bookmarkStacks');
    if (!jsonItems) return;
    const result = JSON.parse(jsonItems);
    state.stacks = result;
  },
  INIT_COMPANIES(state) {
    const jsonItems = window.localStorage.getItem('bookmarkCompanies');
    if (!jsonItems) return;
    const result = JSON.parse(jsonItems);
    state.companies = result;
  },
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
  DELETE_COMPANY(state, id) {
    const jsonItems = window.localStorage.getItem('bookmarkCompanies');
    const result = JSON.parse(jsonItems);
    const idx = result.findIndex(el => el._id === id);
    result.splice(idx, 1);
    state.companies = result;
    window.localStorage.setItem('bookmarkCompanies', JSON.stringify(result));
  },
  DELETE_STACKS(state, id) {
    const jsonItems = window.localStorage.getItem('bookmarkStacks');
    const result = JSON.parse(jsonItems);
    const idx = result.findIndex(el => el._id === id);
    result.splice(idx, 1);
    state.stacks = result;
    window.localStorage.setItem('bookmarkStacks', JSON.stringify(result));
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
