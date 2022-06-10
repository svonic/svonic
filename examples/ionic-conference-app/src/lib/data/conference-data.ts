import type { Location } from '$lib/models/location';
import type { Session } from '$lib/models/session';
import type { Speaker } from '$lib/models/speaker';

let locationList: Location[];
let sessionList: Session[];
let speakerList: Speaker[];

export const getLocationList = async () => {
	if (locationList) {
		return locationList;
	} else {
		const response = await import(`./locations.json`);

		locationList = response.default as Location[];

		return locationList;
	}
};

export const getSessionList = async () => {
	if (sessionList) {
		return sessionList;
	} else {
		const response = await import(`./sessions.json`);

		sessionList = response.default as Session[];

		// console.log(sessionList);

		return sessionList;
	}
};

export const getSpeakerList = async () => {
	if (speakerList) {
		return speakerList;
	} else {
		const response = await import(`./speakers.json`);

		speakerList = response.default as Speaker[];

		// console.log(speakerList);

		return speakerList;
	}
};
