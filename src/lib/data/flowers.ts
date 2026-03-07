export type FlowerType = 'tulip' | 'round' | 'orchid';

export interface FlowerTrait {
	trait: string;
	color: string;
	type: FlowerType;
}

export const flowers: FlowerTrait[] = [
	// Round flowers (original design)
	{ trait: 'Stärke', color: '#E05C8A', type: 'round' },
	{ trait: 'Wärme', color: '#F27A9B', type: 'round' },
	{ trait: 'Mut', color: '#D94F6B', type: 'round' },
	// Tulips
	{ trait: 'Anmut', color: '#E8A62E', type: 'tulip' },
	{ trait: 'Weisheit', color: '#6BAE5A', type: 'tulip' },
	{ trait: 'Kreativität', color: '#5B9BD5', type: 'tulip' },
	// Orchids
	{ trait: 'Güte', color: '#E88B5A', type: 'orchid' },
	{ trait: 'Lebensfreude', color: '#D4A843', type: 'orchid' },
	{ trait: 'Zärtlichkeit', color: '#C77DB2', type: 'orchid' }
];
