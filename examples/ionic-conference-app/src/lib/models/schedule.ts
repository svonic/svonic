import type { SessionGroup } from './session';

export interface Schedule {
	date: Date;
	groups: SessionGroup[];
}
