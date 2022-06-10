import type { Schedule } from '$lib/models/schedule';
import type { Session, SessionGroup } from '$lib/models/session';
import type { Speaker } from '$lib/models/speaker';
import { derived, writable, type Readable, type Writable } from 'svelte/store';

export interface AppState extends SessionState {
	isLoading: boolean;
	isError: boolean;
	isLoggedIn: boolean;
}

export interface SessionState {
	searchText: string;
	trackFilters: string[];
	favoriteSessions: number[];
}

export const state: Writable<AppState> = writable({
	isError: false,
	isLoading: false,
	isLoggedIn: false,
	searchText: '',
	trackFilters: [],
	favoriteSessions: []
});

export const sessionsStore: Writable<Session[]> = writable([]);
export const speakersStore: Writable<Speaker[]> = writable([]);

export const scheduleStore: Readable<Schedule> = derived(sessionsStore, ($sessionsStore) => {
	const schedule: Schedule = {
		date: new Date(),
		groups: groupedByStartTime($sessionsStore)
	};

	return schedule;
});

export const allTracks: Readable<string[]> = derived(sessionsStore, ($sessionsStore) => {
	return $sessionsStore
		.reduce((all, session) => all.concat(session.tracks), <string[]>[])
		.filter((trackName, index, array) => array.indexOf(trackName) === index)
		.sort();
});

export const allFiltered = derived([state, sessionsStore], ([$appState, $sessionsStore]) => {
	const searchSessions = searchText($appState.searchText);
	const searchTracks = filterByTrack($appState.trackFilters);

	return $sessionsStore.filter(searchSessions).filter(searchTracks);
});

export const favoritesFiltered = derived([state, sessionsStore], ([$appState, $sessionsStore]) => {
	const searchSessions = searchText($appState.searchText);
	const searchTracks = filterByTrack($appState.trackFilters);

	const isFavorite = (session: Session): boolean => {
		return $appState.favoriteSessions.indexOf(session.id) !== -1;
	};

	return $sessionsStore.filter(isFavorite).filter(searchSessions).filter(searchTracks);
});

const groupedByStartTime = (sessions: Session[]): SessionGroup[] => {
	return sessions
		.sort((a, b) => new Date(a.dateTimeStart).valueOf() - new Date(b.dateTimeStart).valueOf())
		.reduce((groups, session) => {
			const starterHour = new Date(session.dateTimeStart);
			starterHour.setMinutes(0);
			starterHour.setSeconds(0);
			const starterHourStr = starterHour.toJSON();

			const foundGroup = groups.find((group) => group.startTime === starterHourStr);
			if (foundGroup) {
				foundGroup.sessions.push(session);
			} else {
				groups.push({
					startTime: starterHourStr,
					sessions: [session]
				});
			}
			return groups;
		}, [] as SessionGroup[]);
};

export const addTrackFilter = (trackName: string) => {
	state.update((old: AppState) => {
		if (!old.trackFilters.includes(trackName)) {
			old.trackFilters.push(trackName);
		}
		return old;
	});
};

export const removeTrackFilter = (trackName: string) => {
	state.update((old: AppState) => {
		old.trackFilters = old.trackFilters.filter((tn: string) => tn !== trackName);
		return old;
	});
};

export const updateTrackFilters = (trackNames: string[]) => {
	state.update((old: AppState) => {
		old.trackFilters = trackNames;
		return old;
	});
};

export const addFavorite = (sessionId: number) => {
	state.update((old: AppState) => {
		if (!old.favoriteSessions.includes(sessionId)) {
			old.favoriteSessions.push(sessionId);
		}
		return old;
	});
};

export const removeFavorite = (sessionId: number) => {
	state.update((old: AppState) => {
		old.favoriteSessions = old.favoriteSessions.filter((fsId: number) => fsId !== sessionId);
		return old;
	});
};

export const updateFavoriteFilter = (sessionIds: number[]) => {
	state.update((old: AppState) => {
		old.favoriteSessions = sessionIds;
		return old;
	});
};

const searchText = (searchText: string) => {
	if (!searchText) {
		return () => true;
	}
	const lowerSearchText = searchText.toLowerCase();
	return (session: Session) => session.name.toLowerCase().indexOf(lowerSearchText) !== -1;
};

const filterByTrack = (trackFilters: string[]) => {
	if (trackFilters.length === 0) {
		return () => true;
	}
	return (session: Session) =>
		session.tracks.some((sessionTrackName) =>
			trackFilters.some((trackName) => trackName === sessionTrackName)
		);
};
