import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.vercel.app',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkBreaks],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
