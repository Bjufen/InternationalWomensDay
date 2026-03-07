export type FlowerType = 'tulip' | 'round' | 'orchid';

export interface FlowerTrait {
	trait: string;
	description: string;
	color: string;
	type: FlowerType;
}

export const flowers: FlowerTrait[] = [
	// Round flowers — bright, radiating outward energy
	{ trait: 'Lebensfreude', description: 'Egal ob random Kleinigkeiten oder krasse Momente. Deine Augen strahlen heller als jede Studio-Beleuchtung.', color: '#D4A843', type: 'round' },
	{ trait: 'Wärme', description: 'Auch in Momente der Schwäche und Vulnerability ist auf deine Wärme Verlass.', color: '#F27A9B', type: 'round' },
	{ trait: 'Wild', description: 'Mit dir hat man immer Spaß. Say perhaps to drugs?', color: '#D94F6B', type: 'round' },
	// Tulips — strong, upright, dependable
	{ trait: 'Stärke', description: 'STRONG INDEPENDENT WOMAN. SLAYYYYYYY!', color: '#E05C8A', type: 'tulip' },
	{ trait: 'Loyalität', description: 'Your people always know you are the one to defend them, even when it becomes difficult.', color: '#E8A62E', type: 'tulip' },
	{ trait: 'Hilfsbereitschaft', description: 'Egal was es ist, die Leute die dir wichtig sind, wissen sie können immer zu dir kommen.', color: '#6BAE5A', type: 'tulip' },
	// Lilies — graceful, poetic, expressive
	{ trait: 'Hoffnungsschimmer', description: 'Dein Herz ist ein Safe-Space für \'Was wenn?\'. Du siehst das Licht, auch wenn andere schon im Dunkeln sitzen.', color: '#5B9BD5', type: 'orchid' },
	{ trait: 'Kreativität', description: 'Alleine schon deine Geschenkideen.', color: '#E88B5A', type: 'orchid' },
	{ trait: 'Tatjana', description: 'Dein Vibe ist ein Kunstwerk. Ein Glänzen, das man nicht fassen kann. Wer dich sieht, kriegt direkt bessere Laune.', color: '#C77DB2', type: 'orchid' }
];
