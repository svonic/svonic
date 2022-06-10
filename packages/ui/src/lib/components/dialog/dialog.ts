// import { defineCustomElement } from '$lib/utils/utils';
// import { modalController } from '@ionic/core/components';

// // interface DialogConfig
// // {

// // }

// // let options: ModalOptions  {
// //     animated?: Boolean;
// // };

// export async function showModal(
// 	component: any,
// 	selector: string,
// 	componentProps?: any,
// 	cssClass?: string
// ): Promise<any> {
// 	const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
// 	const IonModal = (await import('@ionic/core/components/ion-modal')).IonModal;

// 	defineCustomElement('ion-backdrop', IonBackdrop);
// 	defineCustomElement('ion-modal', IonModal);

// 	return await modalController
// 		.create({
// 			component: selector,
// 			componentProps,
// 			cssClass: 'svo-modal'
// 		})
// 		.then((modal) => {
// 			modal.present();
// 			const modalElement = document.getElementsByTagName(selector)[0];
// 			if (modalElement) {
// 				const app = new component({
// 					target: modalElement,
// 					props: {
// 						name: 'Fraya'
// 					}
// 				});
// 			}
// 			return modal.onWillDismiss();
// 		});
// }

// export async function dismissModal(): Promise<boolean> {
// 	console.log(modalController);
// 	return await modalController.dismiss({
// 		dismissed: true
// 	});
// }
