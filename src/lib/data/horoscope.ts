export interface Horoscope {
	sign: string;
	symbol: string;
	dateRange: string;
	title: string;
	text: string[];
}

export const horoscope: Horoscope = {
	sign: 'Krebs',
	symbol: '♋',
	dateRange: '14. Juli 2000',
	title: 'Dein persönliches Horoskop',
	text: [
		'Heute ist ein Tag voller Spaß und schöne Gesellschaft, aber auch Mysterium. Was passiert wohl bei 100%?',
		'Die Sterne stehen günstig für dich. Das war schon immer so, denn du bist einfach Toll.',
		'Heute bringt wunderbare Überraschungen, aber auch angespannte Zeiten (Or maybe not? THATS FOR ME TO KNOW AND YOU TO FIND OUTTTTTT). Vertraue auf deine Stärke und dein Herz :)'
	]
};
