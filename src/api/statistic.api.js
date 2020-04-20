import baseURL from './index.js';

export default {
  getStatistics() {
    return baseURL.get('/statistic')
      .then(response => {
        const { data } = response;
        return {
          isError: false,
          item: data.item,
        };
      })
      .catch(error => {
        const { data } = error.response;
        return {
          isError: true,
          item: {
            msg: data.msg,
            statusCode: error.response.status,
          },
        };
      });
  },
};
