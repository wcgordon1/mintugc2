// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Explicitly set the config file path
    configFile: './tailwind.config.mjs',
    // Enable just-in-time mode
    applyBaseStyles: true,
  })]
});
