import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-web-app-gamma.vercel.app',
	output: 'hybrid',
	integrations: [
		react({
			include: ['**/react/*'],
		}),
		solidJs({
			include: ['**/solid/*'],
		}),
	],
	adapter: vercel(),
});
