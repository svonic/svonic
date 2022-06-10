import { getLocationList } from '$lib/data/conference-data';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const locations = await getLocationList();

	return {
		status: 200,
		body: {
			locations
		}
	};
};
