import { getSessionList } from '$lib/data/conference-data';
import type { Session } from '$lib/models/session';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const ssessionId: number = +params.id;

	const sessionList = await getSessionList();

	const session: Session = sessionList.find((speaker) => speaker.id === ssessionId);

	return {
		status: 200,
		body: {
			session: session
		}
	};
};
