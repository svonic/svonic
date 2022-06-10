import { getSessionList, getSpeakerList } from '$lib/data/conference-data';
import type { Speaker } from '$lib/models/speaker';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const speakerId: number = +params.id;

	const sessionList = await getSessionList();
	const speakerList = await getSpeakerList();

	const speaker: Speaker = speakerList.find((speaker) => speaker.id === speakerId);

	return {
		status: 200,
		body: {
			speaker
		}
	};
};
