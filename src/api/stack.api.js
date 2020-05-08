import baseURL from './index.js';

export default {
  getStacks(jobType, jobDetail, category) {
    return baseURL.get('/stack',  {
			params: {
        'job_type': jobType,
        'job_detail': jobDetail,
        category,
			},
		})
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
