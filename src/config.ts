import type { PostHideElements } from '~/content/config';

export const Site = 'https://bettermultiply.github.io';
export const SiteLanguage = 'en';
export const SiteTitle = 'BETMUL';
export const SiteDescription = 'Sometimes, all you need is persistence.';
export const FooterDescription = '潮流汹涌';
export const AdminName = 'Betmul';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'bettermultiply@gmail.com' },
	github: { url: 'https://github.com/bettermultiply' },
	// x: { url: 'https://x.com/bettermultiply' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'bettermultiply/bettermultiply.github.io',
	'data-repo-id': 'R_kgDOLgobXQ',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOLgobXc4Cd_N6',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'zh-CN',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
