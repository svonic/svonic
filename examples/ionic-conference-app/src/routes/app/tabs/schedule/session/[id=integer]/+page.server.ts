import { getSessionList } from '$lib/data/conference-data';
import type { Session } from '$lib/models/session';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const ssessionId: number = +params.id;

	const sessionList = await getSessionList();

	const session: Session | undefined = sessionList.find((speaker) => speaker.id === ssessionId);

	return {
		status: 200,
		body: {
			session: session
		}
	};
};
