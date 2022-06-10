import type { IonicConfig } from '@ionic/core/components';
import '@ionic/core/css/core.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

const getHelperFunctions = () => {
	return {
		ce: (eventName: string, opts: any) => new CustomEvent(eventName, opts)
	};
};

export const initializeIonic = async (config: IonicConfig = {}): Promise<void> => {
	if (typeof window !== 'undefined') {
		const initialize = (await import('@ionic/core/components')).initialize;

		/**
		 * By default Ionic Framework hides elements that
		 * are not hydrated, but in the CE build there is no
		 * hydration.
		 * TODO: Remove when all integrations have been
		 * migrated to CE build.
		 */

		if (typeof (document as Document) !== 'undefined') {
			document.documentElement.classList.add('ion-ce');
		}

		const { ce } = getHelperFunctions();

		initialize({
			...config,
			_ce: ce
		});
	}
};
