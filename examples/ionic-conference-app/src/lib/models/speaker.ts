import type { Session } from './session';

export interface Speaker {
	id: number;
	name: string;
	profilePic: string;
	twitter: string;
	instagram: string;
	about: string;
	title: string;
	location: string;
	email: string;
	phone: string;
	sessions: Session[];
}
