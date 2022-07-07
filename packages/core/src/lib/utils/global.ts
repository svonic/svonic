import type { IonicConfig, Mode } from "@ionic/core/components";
import type { HostRef, PlatformRuntime, ResolutionHandler, RuntimeRef } from "@stencil/core/internal";
import { config, configFromSession, configFromURL, saveConfig } from "./global-config";
import { isPlatform, setupPlatforms } from "./platform";


declare const Context: any;

const modeResolutionChain: ResolutionHandler[] = [];
const hostRefs: WeakMap<RuntimeRef, HostRef> = new WeakMap();
const getHostRef = (ref: RuntimeRef) => hostRefs.get(ref);
const getMode = (ref: RuntimeRef) => getHostRef(ref).$modeName$;
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

let defaultMode: Mode;

const setStencilMode = (elm: HTMLElement, mode: Mode) => {

	console.log('elm', elm);

	const ionicElementList = Array.from(elm.getElementsByTagName('*')).filter((el) => isIonicElement(el));

	console.log('ionicElementList', ionicElementList);

	ionicElementList.forEach((ionicElement) => {
		const elmMode = (ionicElement as any).mode || ionicElement.getAttribute('mode') || mode;

		if (isAllowedIonicModeValue(elmMode) && isIonicElement(ionicElement)) {
			ionicElement.setAttribute('mode', elmMode);
			console.log('setMode elm', ionicElement);
		}
	});
};


export const isIonicElement = (elm: Element) => elm.tagName?.startsWith('ION-');

export const isAllowedIonicModeValue = (elmMode: string) => ['ios', 'md'].includes(elmMode);

export const getIonMode = (ref?: any): Mode => {
	return (ref && getMode(ref)) || defaultMode;
};

export const initialize = (userConfig: IonicConfig = {}) => {
	if (typeof (window as Window) === 'undefined') {
		return;
	}

	const doc = window.document;
	const win = window;
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

	setMode((elm: HTMLElement) => {
		while (elm) {
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
};

export const initializeSSR = (doc: Document, userConfig: IonicConfig = {}) => {

	const Context = { config: {} };

	Context.config = config;

	const Ionic = {
		config: {},
		mode: '' as Mode,
	};

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


	// first see if the mode was set as an attribute on <html>
	// which could have been set by the user, or by pre-rendering
	// otherwise get the mode via config settings, and fallback to md
	Ionic.config = config;
	Ionic.mode = defaultMode = config.get(
		'mode',
		doc.documentElement.getAttribute('mode') || 'md'
	);
	config.set('mode', defaultMode);
	doc.documentElement.setAttribute('mode', defaultMode);
	doc.documentElement.classList.add(defaultMode);

	if (config.getBoolean('_testing')) {
		config.set('animated', false);
	}

	setStencilMode(document.body, defaultMode);

	setMode((elm: HTMLElement) => {
		console.log('setMode elm', elm);

		while (elm) {
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

export default initialize;
