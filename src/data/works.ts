export type WorkStatus = 'active' | 'done' | 'paused';

export type WorkMedium =
	| 'anime'
	| 'manga'
	| 'novel'
	| 'film'
	| 'series'
	| 'game';

export interface WorkEntry {
	title: string;
	medium: WorkMedium;
	status: WorkStatus;
	progress: string;
	updatedAt: string;
	year?: number;
	note?: string;
	cover?: string;
	shortTitle?: string;
	coverPosition?: string;
	accent: {
		from: string;
		to: string;
		glow: string;
	};
}

export const mediumLabel: Record<WorkMedium, string> = {
	anime: '动画',
	manga: '漫画',
	novel: '小说',
	film: '电影',
	series: '剧集',
	game: '游戏',
};

export const statusLabel: Record<WorkStatus, string> = {
	active: '最近在追',
	done: '已体验完',
	paused: '暂时搁置',
};

export const worksEntries: WorkEntry[] = [
	{
		title: '请听我的声音',
		shortTitle: '请听',
		medium: 'manga',
		status: 'active',
		coverPosition: '50% 30%',
		progress: '读到最新话',
		updatedAt: '2026-03-29',
		note: '台湾漫画，青春期的情感描写细腻。',
		cover: '/covers/manga-395193.jpg',
		accent: {
			from: '#e8d4c8',
			to: '#a67c6d',
			glow: 'rgba(166, 124, 109, 0.15)',
		},
	},
	{
		title: '今朝恋心也随车摇曳',
		shortTitle: '今朝',
		medium: 'manga',
		status: 'active',
		coverPosition: '50% 12%',
		progress: '读到最新话',
		updatedAt: '2026-03-29',
		note: '通勤电车上的恋爱喜剧，轻松有趣。',
		cover: '/covers/manga-469840.jpg',
		accent: {
			from: '#f5e6d3',
			to: '#c89b7e',
			glow: 'rgba(200, 155, 126, 0.16)',
		},
	},
	{
		title: '药屋少女的呢喃',
		medium: 'anime',
		status: 'active',
		coverPosition: '100% 60%',
		progress: '看到第 18 / 24 集',
		updatedAt: '2026-03-25',
		note: '猫猫的观察和吐槽太有趣了。',
		cover: '/covers/Kusuriya.png',
		accent: {
			from: '#d8d1bf',
			to: '#89806f',
			glow: 'rgba(143, 125, 99, 0.16)',
		},
	},
	{
		title: '葬送的芙莉莲',
		medium: 'anime',
		status: 'active',
		progress: '看到第 22 / 28 集',
		updatedAt: '2026-03-23',
		note: '慢节奏、长余韵，适合反复回想。',
		accent: {
			from: '#d7d8cf',
			to: '#7f8b83',
			glow: 'rgba(120, 138, 131, 0.17)',
		},
	},
	{
		title: '迷宫饭',
		medium: 'anime',
		status: 'done',
		progress: '24 / 24 集',
		updatedAt: '2026-03-16',
		note: '设定和食物脑洞都很完整。',
		accent: {
			from: '#e0cfb6',
			to: '#8f6d4a',
			glow: 'rgba(143, 109, 74, 0.18)',
		},
	},
];
