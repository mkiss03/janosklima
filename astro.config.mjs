import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.ecocool-klima.at',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    domains: [],
  },
});
