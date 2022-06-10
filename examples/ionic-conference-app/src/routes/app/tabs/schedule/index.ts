import { getSessionList } from '$lib/data/conference-data';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const sessions = await getSessionList();

	return {
		status: 200,
		body: {
			sessions
		}
	};
};
