import { getComponentData } from '$lib/data/data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const componentId: string = params.id;
	const langId: string = params.lang;

	const componentData: ComponentDataAPI = getComponentData(componentId);
	let response = {};

	if (componentData) {
		response = {
			description: componentData.description[langId] ?? componentData.description.en,
			dispatchedEventList: componentData.dispatchedEventList.map((event) => {
				return {
					description: event.description[langId] ?? event.description.en,
					name: event.name
				};
			}),
			forwardedEventList: componentData.forwardedEventList.map((event) => {
				return {
					description: event.description[langId] ?? event.description.en,
					name: event.name
				};
			}),
			ionic: componentData.ionic,
			keyboardNavigationList: componentData.keyboardNavigationList.map((keyboardNavigation) => {
				return {
					description: keyboardNavigation.description[langId] ?? keyboardNavigation.description.en,
					valueList: keyboardNavigation.valueList.map((value) => {
						return {
							function: value.function[langId] ?? value.function.en,
							key: value.key,
							keyCodeList: value.keyCodeList
						};
					})
				};
			}),
			// label: componentData.label[langId] ?? componentData.label.en,
			label: componentData.label,
			methodList: componentData.methodList.map((method) => {
				return {
					description: method.description[langId] ?? method.description.en,
					name: method.name,
					signature: method.signature
				};
			}),
			name: componentData.name,
			propList: componentData.propList.map((prop) => {
				return {
					defaultValue: prop.defaultValue,
					description: prop.description[langId] ?? prop.description.en,
					hasDemo: prop.hasDemo,
					isSpecial: prop.isSpecial,
					name: prop.name,
					valueList: prop.valueList
				};
			}),
			slotList: componentData.slotList.map((slot) => {
				return {
					description: slot.description[langId] ?? slot.description.en,
					name: slot.name
				};
			})
		};
	}

	return {
		status: 200,
		body: {
			componentData: response
		}
	};
};
