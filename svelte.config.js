import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vesper'],
				langs: ['javascript', 'typescript', 'svelte', 'py', 'python']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'svelte', 'py', 'python');
			await highlighter.loadTheme('vesper');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vesper' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false,
            strict: true
        }),
        paths: {
            base: process.env.NODE_ENV === 'development' ? '' : '/me'
        },
        prerender: {
            entries: ['*']
        }
	}
};

export default config;
