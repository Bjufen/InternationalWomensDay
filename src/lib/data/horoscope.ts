export interface Horoscope {
	sign: string;
	symbol: string;
	dateRange: string;
	title: string;
	text: string[];
}

export const horoscope: Horoscope = {
	sign: 'Dein Sternzeichen',
	symbol: '★',
	dateRange: 'Dein Geburtsdatum',
	title: 'Dein persönliches Horoskop',
	text: [
		'Hier kommt dein persönliches Horoskop hin. Dieser Text ist ein Platzhalter und wird noch durch einen individuellen Text ersetzt.',
		'Die Sterne stehen günstig für dich – das war schon immer so, denn du trägst dein eigenes Licht in dir.',
		'Dieses Jahr bringt neue Möglichkeiten und wunderbare Überraschungen. Vertraue auf deine Stärke und dein Herz.'
	]
};
