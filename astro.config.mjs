import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // 公開URLが決まったら必要に応じて
  // site: 'https://あなたのサイトURL.netlify.app'
});
