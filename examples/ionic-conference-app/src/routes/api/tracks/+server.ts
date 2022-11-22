export async function GET() {
	return {
		body: getTracks(),
		status: 200
	};
}

const getTracks = () => {
	const tracks = [
		{
			name: 'Angular',
			icon: 'logo-angular'
		},
		{
			name: 'Documentation',
			icon: 'document'
		},
		{
			name: 'Food',
			icon: 'restaurant'
		},
		{
			name: 'Ionic',
			icon: 'logo-ionic'
		},
		{
			name: 'Tooling',
			icon: 'hammer'
		},
		{
			name: 'Design',
			icon: 'color-palette'
		},
		{
			name: 'Services',
			icon: 'cog'
		},
		{
			name: 'Workshop',
			icon: 'construct'
		},
		{
			name: 'Communication',
			icon: 'call'
		},
		{
			name: 'Navigation',
			icon: 'compass'
		}
	];

	return tracks;
};
