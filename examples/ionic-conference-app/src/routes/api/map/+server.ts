export async function GET() {
	return {
		body: getMap(),
		status: 200
	};
}

const getMap = () => {
	const map = [
		{
			name: 'Monona Terrace Convention Center',
			lat: 43.071584,
			lng: -89.38012,
			center: true
		},
		{
			name: 'Ionic HQ',
			lat: 43.074395,
			lng: -89.381056
		},
		{
			name: 'Afterparty - Brocach Irish Pub',
			lat: 43.07336,
			lng: -89.38335
		}
	];

	return map;
};
