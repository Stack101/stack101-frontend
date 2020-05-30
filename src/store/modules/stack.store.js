import stackAPI from '@/api/stack.api.js';

const state = {
  stackDetails: '',
  bookmarkStacks: [],
};

const mutations = {
  SET_TARGET_STACK(state, obj) {
    state.stackDetails = obj;
  },
  ADD_BOOKMARK_COMPANY(state, obj) {
    state.bookmarkStacks.push(obj);
    // 북마크 배열에 필요한 정보가 담긴 obj가 쌓인다
    // store에 저장해야한다
    // LocalStorage에도 저장되어야 한다
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
