export interface ComponentDataAPI {
	description: TranslatableString;
	dispatchedEventList: ComponentEventAPI[];
	forwardedEventList: ComponentEventAPI[];
	ionic: {
		documentationUrl: string;
		sourceUrl: string;
	};
	keyboardNavigationList: ComponentKeyboardNavigationAPI[];
	label: string;
	methodList: ComponentMethodAPI[];
	name: string;
	propList: ComponentPropAPI[];
	slotList: ComponentSlotAPI[];
}

export interface ComponentEventAPI {
	description: TranslatableString;
	name: string;
}

export interface ComponentKeyboardNavigationAPI {
	description: TranslatableString;
	valueList: ComponentKeyboardNavigationValueAPI[];
}

export interface ComponentKeyboardNavigationValueAPI {
	function: TranslatableString;
	key: string;
	keyCodeList: KeyCode[];
}

export interface ComponentMethodAPI {
	description: TranslatableString;
	name: string;
	signature: string;
}

export interface ComponentPropAPI {
	defaultValue: string;
	description: TranslatableString;
	hasDemo: boolean;
	isSpecial: boolean;
	name: string;
	valueList: ComponentPropValueAPI[];
}

export interface ComponentPropValueAPI {
	type: string;
	value: string;
}

export interface ComponentSlotAPI {
	description: TranslatableString;
	name: string;
}

interface KeyCode {
	key: string[];
}

interface TranslatableString {
	en: string;
}
