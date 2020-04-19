import baseURL from './index.js';

export default {
  getCompanies() {
    return baseURL.get('/company')
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  },
};

