const production = process.env.NODE_ENV === 'production';

module.exports = {
	mode: 'jit',
	darkMode: 'class',
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	plugins: [],
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
	variants: {
		extend: {}
	},
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	]
};
