export interface Session {
	id: number;
	dateTimeStart: string;
	dateTimeEnd: string;
	isFavorite: boolean;
	name: string;
	location: string;
	description: string;
	speakerIds: number[];
	tracks: string[];
}

export interface SessionGroup {
	startTime: string;
	sessions: Session[];
}
