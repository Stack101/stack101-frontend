import baseURL from './index.js';

export default {
	getCompanies(jobType, jobDetail, category) {
		return baseURL.get('/company',  {
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
	getTargetCompany(id) {
		return baseURL.get(`/company/${id}`)
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
