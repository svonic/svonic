import type { ComponentDataAPI } from './component-data-api.type';

export interface ComponentGroup {
	group: string;
	groupList: ComponentGroupItem[];
}

export interface ComponentGroupItem {
	data: ComponentDataAPI;
	label: string;
	name: string;
	route: string;
}
