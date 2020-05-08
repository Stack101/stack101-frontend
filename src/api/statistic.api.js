import baseURL from './index.js';

export default {
	getStatistics(jobDetail) {
		return baseURL.get('/statistic', {
			params: {
				'job_detail': jobDetail,
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
