export type AnimeStatus = 'watching' | 'done' | 'paused';

export interface AnimeEntry {
	title: string;
	episode: number;
	total: number | null;
	updatedAt: string;
	status: AnimeStatus;
}

export const animeEntries: AnimeEntry[] = [
	{
		title: '药屋少女的呢喃',
		episode: 18,
		total: 24,
		updatedAt: '2026-03-25',
		status: 'watching',
	},
	{
		title: '葬送的芙莉莲',
		episode: 22,
		total: 28,
		updatedAt: '2026-03-23',
		status: 'watching',
	},
	{
		title: '迷宫饭',
		episode: 24,
		total: 24,
		updatedAt: '2026-03-16',
		status: 'done',
	},
];
