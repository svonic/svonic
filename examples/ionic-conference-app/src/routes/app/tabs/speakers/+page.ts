import { getSessionList, getSpeakerList } from '$lib/data/conference-data';
import type { Session } from '$lib/models/session';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const sessionList = await getSessionList();
	const speakerList = await getSpeakerList();

	const speakers = speakerList.map((speaker) => {
		return {
			...speaker,
			sessions: getSessionsBySpeaker(sessionList, speaker.id)
		};
	});

	return {
		status: 200,
		body: {
			speakers
		}
	};
};

const getSessionsBySpeaker = (sessionList: Session[], speakerId: number) => {
	return sessionList.filter((s: Session) => s.speakerIds.indexOf(speakerId) !== -1);
};
