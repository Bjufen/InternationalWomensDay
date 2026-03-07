export type FlowerType = 'tulip' | 'round' | 'orchid';

export interface FlowerTrait {
	trait: string;
	description: string;
	color: string;
	type: FlowerType;
}

export const flowers: FlowerTrait[] = [
	// Round flowers (original design)
	{ trait: 'Stärke', description: 'Beschreibung kommt hier hin.', color: '#E05C8A', type: 'round' },
	{ trait: 'Wärme', description: 'Beschreibung kommt hier hin.', color: '#F27A9B', type: 'round' },
	{ trait: 'Mut', description: 'Beschreibung kommt hier hin.', color: '#D94F6B', type: 'round' },
	// Tulips
	{ trait: 'Anmut', description: 'Beschreibung kommt hier hin.', color: '#E8A62E', type: 'tulip' },
	{ trait: 'Weisheit', description: 'Beschreibung kommt hier hin.', color: '#6BAE5A', type: 'tulip' },
	{ trait: 'Kreativität', description: 'Beschreibung kommt hier hin.', color: '#5B9BD5', type: 'tulip' },
	// Snowdrops (Schneeglöckchen)
	{ trait: 'Güte', description: 'Beschreibung kommt hier hin.', color: '#E88B5A', type: 'orchid' },
	{ trait: 'Lebensfreude', description: 'Beschreibung kommt hier hin.', color: '#D4A843', type: 'orchid' },
	{ trait: 'Zärtlichkeit', description: 'Beschreibung kommt hier hin.', color: '#C77DB2', type: 'orchid' }
];
