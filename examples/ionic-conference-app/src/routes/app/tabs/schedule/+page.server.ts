import { getSessionList } from '$lib/data/conference-data';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const sessions = await getSessionList();

	return {
		status: 200,
		body: {
			sessions
		}
	};
};
