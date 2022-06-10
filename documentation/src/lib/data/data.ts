import type { ComponentDataAPI } from '$lib/types/component-data-api.type';
import { componentList } from './component-list';

export const getComponentData = (componentName: string) => {
	const componentList = getComponentList();

	let componentData: ComponentDataAPI = null;

	componentList.find((component) => {
		const selectedComponent = component.groupList.find((group) => {
			return group.name === componentName;
		});

		if (selectedComponent) {
			componentData = selectedComponent.data;
		}
	});

	return componentData;
};

export const getComponentList = () => {
	return componentList;
};

export const getPageList = () => {
	const pageList = [
		{
			label: 'Introduction',
			name: 'introduction',
			route: '/introduction'
		},
		{
			label: 'Getting Started',
			name: 'getting-started',
			route: '/getting-started'
		}
	];

	return pageList;
};
