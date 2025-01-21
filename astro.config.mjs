import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkCodeBlock from "./src/remark/code-block";
import react from "@astrojs/react"
// https://astro.build/config
export default defineConfig({
    site: 'https://sssmura.github.io',
    base: '/astro-blog/',
    integrations: [mdx(), sitemap(), tailwind(),react()],
    markdown: {
        remarkPlugins: [remarkCodeBlock]
    },
});