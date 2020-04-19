import baseURL from './index.js';

export default {
  getStacks() {
    return baseURL.get('/stack')
      .then(res => {
        return res;
      });
  },
};
