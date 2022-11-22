export async function GET() {
	return {
		body: getSchedule(),
		status: 200
	};
}

const getSchedule = () => {
	const schedule = [
		{
			date: '2047-05-17',
			groups: [
				{
					time: '8:00 am',
					sessions: [
						{
							name: 'Breakfast',
							timeStart: '8:00 am',
							timeEnd: '9:00 am',
							location: 'Dining Hall',
							tracks: ['Food'],
							id: '1'
						}
					]
				},
				{
					time: '9:15 am',
					sessions: [
						{
							name: 'Getting Started with Ionic',
							location: 'Hall 2',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Ted Turtle'],
							timeStart: '9:30 am',
							timeEnd: '9:45 am',
							tracks: ['Ionic'],
							id: '2'
						},
						{
							name: 'Ionic Tooling',
							location: 'Executive Ballroom',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Rachel Rabbit'],
							timeStart: '9:45 am',
							timeEnd: '10:00 am',
							tracks: ['Tooling'],
							id: '3'
						},
						{
							name: 'University of Ionic',
							location: 'Hall 3',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Ellie Elephant'],
							timeStart: '9:15 am',
							timeEnd: '9:30 am',
							tracks: ['Ionic'],
							id: '4'
						}
					]
				},
				{
					time: '10:00 am',
					sessions: [
						{
							name: 'Migrating to Ionic',
							location: 'Hall 1',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Eva Eagle', 'Lionel Lion'],
							timeStart: '10:00 am',
							timeEnd: '10:15 am',
							tracks: ['Ionic'],
							id: '5'
						},
						{
							name: "What's New in Angular",
							location: 'Hall 3',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Rachel Rabbit'],
							timeStart: '10:15 am',
							timeEnd: '10:30 am',
							tracks: ['Angular'],
							id: '6'
						},
						{
							name: 'The Evolution of Ionicons',
							location: 'Hall 2',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Isabella Iguana', 'Eva Eagle'],
							timeStart: '10:15 am',
							timeEnd: '10:30 am',
							tracks: ['Design'],
							id: '7'
						},
						{
							name: 'Ionic Pro',
							location: 'Grand Ballroom A',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Charlie Cheetah'],
							timeStart: '10:45 am',
							timeEnd: '11:00 am',
							tracks: ['Services'],
							id: '8'
						}
					]
				},
				{
					time: '11:00 am',
					sessions: [
						{
							name: 'Ionic Workshop',
							location: 'Hall 1',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Karl Kitten', 'Lionel Lion'],
							timeStart: '11:00 am',
							timeEnd: '11:45 am',
							tracks: ['Workshop'],
							id: '9'
						},
						{
							name: 'Community Interaction',
							location: 'Hall 3',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Lionel Lion', 'Gino Giraffe'],
							timeStart: '11:30 am',
							timeEnd: '11:50 am',
							tracks: ['Communication'],
							id: '10'
						},
						{
							name: 'Navigation in Ionic',
							location: 'Grand Ballroom A',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Rachel Rabbit', 'Eva Eagle'],
							timeStart: '11:30 am',
							timeEnd: '12:00 pm',
							tracks: ['Navigation'],
							id: '11'
						}
					]
				},
				{
					time: '12:00 pm',
					sessions: [
						{
							name: 'Lunch',
							location: 'Dining Hall',
							description: 'Come grab lunch with all the Ionic fanatics and talk all things Ionic',
							timeStart: '12:00 pm',
							timeEnd: '1:00 pm',
							tracks: ['Food'],
							id: '12'
						}
					]
				},
				{
					time: '1:00 pm',
					sessions: [
						{
							name: 'Ionic in the Enterprise',
							location: 'Hall 1',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Paul Puppy'],
							timeStart: '1:00 pm',
							timeEnd: '1:15 pm',
							tracks: ['Communication'],
							id: '13'
						},
						{
							name: 'Ionic Worldwide',
							location: 'Hall 1',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Gino Giraffe'],
							timeStart: '1:15 pm',
							timeEnd: '1:30 pm',
							tracks: ['Communication'],
							id: '14'
						},
						{
							name: 'The Ionic Package',
							location: 'Grand Ballroom B',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Molly Mouse', 'Burt Bear'],
							timeStart: '1:30 pm',
							timeEnd: '2:00 pm',
							tracks: ['Services'],
							id: '15'
						}
					]
				},
				{
					time: '2:00 pm',
					sessions: [
						{
							name: 'Push Notifications in Ionic',
							location: 'Hall 2',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Burt Bear', 'Charlie Cheetah'],
							timeStart: '2:00 pm',
							timeEnd: '2:30 pm',
							tracks: ['Services'],
							id: '16'
						},
						{
							name: 'Ionic Documentation',
							location: 'Grand Ballroom B',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Donald Duck'],
							timeStart: '2:30 pm',
							timeEnd: '2:45 pm',
							tracks: ['Documentation'],
							id: '17'
						},
						{
							name: 'UX in Ionic',
							location: 'Hall 3',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Isabella Iguana', 'Ellie Elephant'],
							timeStart: '2:45 pm',
							timeEnd: '3:00 pm',
							tracks: ['Design'],
							id: '18'
						}
					]
				},
				{
					time: '3:00',
					sessions: [
						{
							name: 'Angular Directives in Ionic',
							location: 'Hall 1',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Ted Turtle'],
							timeStart: '3:00 pm',
							timeEnd: '3:30 pm',
							tracks: ['Angular'],
							id: '19'
						},
						{
							name: 'Mobile States',
							location: 'Hall 2',
							description:
								'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
							speakerNames: ['Rachel Rabbit'],
							timeStart: '3:30 pm',
							timeEnd: '3:45 pm',
							tracks: ['Navigation'],
							id: '20'
						}
					]
				}
			]
		}
	];

	return schedule;
};
