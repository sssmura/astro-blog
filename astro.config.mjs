import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkCodeBlock from "./src/remark/code-block";

// https://astro.build/config
export default defineConfig({
    site: 'https://sssmura.github.io',
    base: '/astro-blog/',
    integrations: [mdx(), sitemap(), tailwind()],
    markdown: {
        remarkPlugins: [remarkCodeBlock]
    },
});