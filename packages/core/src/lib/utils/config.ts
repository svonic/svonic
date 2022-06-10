import type { ModeType } from '$lib/types/mode.type';
import type { Config as CoreConfig } from '@ionic/core/components';

type PlatformType =
	| 'ios'
	| 'ipad'
	| 'iphone'
	| 'android'
	| 'phablet'
	| 'tablet'
	| 'cordova'
	| 'capacitor'
	| 'electron'
	| 'pwa'
	| 'mobile'
	| 'mobileweb'
	| 'desktop'
	| 'hybrid';

type GlobalThis = typeof globalThis &
	Window & {
		NaN: never;
		Infinity: never;
	};

interface Ionic {
	config: CoreConfig;
	mode: ModeType;
	platforms: PlatformType[];
}

interface IonicWindow extends GlobalThis {
	Ionic: Ionic;
}

export const getConfig = (): CoreConfig | null => {
	if (typeof (window as Window) !== 'undefined') {
		const Ionic: Ionic = (window as IonicWindow).Ionic;
		if (Ionic && Ionic.config) {
			return Ionic.config;
		}
	}
	return null;
};
