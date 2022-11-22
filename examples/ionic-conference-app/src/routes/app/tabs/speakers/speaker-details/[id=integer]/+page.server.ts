import { getSessionList, getSpeakerList } from '$lib/data/conference-data';
import type { Speaker } from '$lib/models/speaker';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const speakerId: number = +params.id;

	const sessionList = await getSessionList();
	const speakerList = await getSpeakerList();

	const speaker: Speaker | undefined = speakerList.find((speaker) => speaker.id === speakerId);

	return {
		status: 200,
		body: {
			speaker
		}
	};
};
