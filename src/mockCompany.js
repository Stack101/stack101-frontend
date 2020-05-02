export default (function() {
	const company = [
		{
			_id: {
				$oid: "5e8df7369e10880d7c7e8601",
			},
			name: "Google",
			description: "number one search engine",
			category: "search-engine",
			link: "http://google.com",
			logo: "logo",
			stacks: [
				{
					$oid: "5e8df68a9e10880d7c7e85f6",
				},
				{
					$oid: "5e8df68a9e10880d7c7e85f7",
				}
			],
		},
		{
			_id: {
				$oid: "5e8df7369e10880d7c7e8602",
			},
			name: "Coupang",
			description: "korean number one e-commerce",
			category: "e-commerce",
			link: "http://google.com",
			logo: "logo",
			stacks: [
				{
					$oid: "5e8df68a9e10880d7c7e85f6",
				},
				{
					$oid: "5e8df68a9e10880d7c7e85f8",
				}
			],
		},
		{
			_id: {
				$oid: "5e8df7369e10880d7c7e8603",
			},
			name: "Balaan",
			description: "korean number one luxury boutique",
			category: "fashion",
			link: "http://balaan.co.kr",
			logo: "logo",
			stacks: [],
		}
	];
	return company;
})();
