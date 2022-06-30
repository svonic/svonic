import type { IonicConfig, Mode } from "@ionic/core/components";
import type { PlatformRuntime, ResolutionHandler } from "@stencil/core/internal";
import { Config, config, configFromSession, configFromURL, saveConfig } from "./global-config";
import { isPlatform, setupPlatforms } from "./platform";


const modeResolutionChain: ResolutionHandler[] = [];
const setMode = (handler: ResolutionHandler) => modeResolutionChain.push(handler);

const plt: PlatformRuntime = {
	$flags$: 0,
	$resourcesUrl$: '',
	jmp: (h) => h(),
	raf: (h) => requestAnimationFrame(h),
	ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
	rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
	ce: (eventName, opts) => new CustomEvent(eventName, opts),
};

const setPlatformHelpers = (helpers: {
	jmp?: (c: any) => any;
	raf?: (c: any) => number;
	ael?: (el: any, eventName: string, listener: any, options: any) => void;
	rel?: (el: any, eventName: string, listener: any, options: any) => void;
	ce?: (eventName: string, opts?: any) => any;
}) => {
	Object.assign(plt, helpers);
};

export const initialize = (userConfig: IonicConfig = {}) => {
	const Context = { config };

	let defaultMode: Mode;

	if (typeof (window as any) === 'undefined') {
		console.log('if config', config)
		Context.config = config;
		const Ionic = {} as any;

		const platformHelpers: any = {};
		if (userConfig._ael) {
			platformHelpers.ael = userConfig._ael;
		}
		if (userConfig._rel) {
			platformHelpers.rel = userConfig._rel;
		}
		if (userConfig._ce) {
			platformHelpers.ce = userConfig._ce;
		}
		setPlatformHelpers(platformHelpers);

		const configObj = {
			persistConfig: false,
			...userConfig,
		};

		config.reset(configObj);

		Ionic.config = config;
		Ionic.mode = defaultMode = config.get(
			'mode',
			'md' // I assume 'md' is default
		);

		config.set('mode', defaultMode);

		if (config.getBoolean('_testing')) {
			config.set('animated', false);
		}

		console.log('if defaultMode', defaultMode);

		setMode((_: any) => defaultMode);

	}
	else {
		const doc = window.document;
		const win = window;
		console.log('else config', config)
		Context.config = config;
		const Ionic = ((win as any).Ionic = (win as any).Ionic || {});

		const platformHelpers: any = {};
		if (userConfig._ael) {
			platformHelpers.ael = userConfig._ael;
		}
		if (userConfig._rel) {
			platformHelpers.rel = userConfig._rel;
		}
		if (userConfig._ce) {
			platformHelpers.ce = userConfig._ce;
		}
		setPlatformHelpers(platformHelpers);

		// create the Ionic.config from raw config object (if it exists)
		// and convert Ionic.config into a ConfigApi that has a get() fn
		const configObj = {
			...configFromSession(win),
			persistConfig: false,
			...Ionic.config,
			...configFromURL(win),
			...userConfig,
		};

		config.reset(configObj);
		if (config.getBoolean('persistConfig')) {
			saveConfig(win, configObj);
		}

		// Setup platforms
		setupPlatforms(win);

		// first see if the mode was set as an attribute on <html>
		// which could have been set by the user, or by pre-rendering
		// otherwise get the mode via config settings, and fallback to md
		Ionic.config = config;
		Ionic.mode = defaultMode = config.get(
			'mode',
			doc.documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md')
		);
		config.set('mode', defaultMode);
		doc.documentElement.setAttribute('mode', defaultMode);
		doc.documentElement.classList.add(defaultMode);

		if (config.getBoolean('_testing')) {
			config.set('animated', false);
		}

		const isIonicElement = (elm: any) => elm.tagName?.startsWith('ION-');

		const isAllowedIonicModeValue = (elmMode: string) => ['ios', 'md'].includes(elmMode);

		setMode((elm: any) => {
			while (elm) {
				console.log('elm', elm);
				const elmMode = (elm as any).mode || elm.getAttribute('mode');
				if (elmMode) {
					if (isAllowedIonicModeValue(elmMode)) {
						return elmMode;
					} else if (isIonicElement(elm)) {
						console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
					}
				}
				elm = elm.parentElement;
			}
			return defaultMode;
		});
	}
};
