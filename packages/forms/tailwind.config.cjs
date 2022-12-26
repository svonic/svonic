const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				14: '3.5rem'
			},
			opacity: {
				12: '0.12',
				80: '0.8'
			}
		}
	},

	plugins: []
};

module.exports = config;
