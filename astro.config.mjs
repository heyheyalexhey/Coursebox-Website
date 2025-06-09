import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heyheyalexhey.github.io',
  base: '/Coursebox-Website',
  output: 'static',
  build: {
    assets: 'astro'
  }
}); 