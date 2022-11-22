import { getLocationList } from '$lib/data/conference-data';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const locations = await getLocationList();

	return {
		status: 200,
		body: {
			locations
		}
	};
};
