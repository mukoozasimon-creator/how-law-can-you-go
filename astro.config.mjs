import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://how-law-can-you-go.pages.dev',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
