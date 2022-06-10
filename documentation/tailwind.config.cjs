const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	important: true,
	theme: {
		extend: {
			minWidth: {
				8: '2.0em'
			},
			zIndex: {
				8: '8'
			}
		}
	},

	plugins: []
};

module.exports = config;
