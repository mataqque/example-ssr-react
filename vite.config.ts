import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from 'vite-plugin-require';
import sassDts from 'vite-plugin-sass-dts';
import svgLoader from 'vite-svg-loader';

import type { UserConfig } from 'vitest/config';

const test = {
	globals: true,
	environment: 'jsdom',
	setupFiles: ['src/__tests__/setupTests.ts'],
	threads: false,
	watch: false,
} as UserConfig['test'];

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), sassDts(), vitePluginRequire(), svgLoader()],
	server: { port: 3000 },
	build: {
		minify: false,
	},
	root: '',
	// @ts-ignore
	test,
});
