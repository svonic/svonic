export interface ComponentData {
	description: string;
	dispatchedEventList: ComponentEvent[];
	forwardedEventList: ComponentEvent[];
	ionic: {
		documentationUrl: string;
		sourceUrl: string;
	};
	keyboardNavigationList: ComponentKeyboardNavigation[];
	label: string;
	methodList: ComponentMethod[];
	name: string;
	propList: ComponentProp[];
	slotList: ComponentSlot[];
}

export interface ComponentEvent {
	description: string;
	name: string;
}

export interface ComponentKeyboardNavigation {
	description: string;
	valueList: ComponentKeyboardNavigationValue[];
}

export interface ComponentKeyboardNavigationValue {
	function: string;
	key: string;
	keyCodeList: KeyCode[];
}

export interface ComponentMethod {
	description: string;
	name: string;
	signature: string;
}

export interface ComponentProp {
	defaultValue: string;
	description: string;
	hasDemo: boolean;
	isSpecial: boolean;
	name: string;
	valueList: ComponentPropValue[];
}

export interface ComponentPropValue {
	type: string;
	value: string;
}

export interface ComponentSlot {
	description: string;
	name: string;
}

interface KeyCode {
	key: string[];
}
