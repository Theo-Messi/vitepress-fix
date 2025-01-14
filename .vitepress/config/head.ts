import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/avatar.webp' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'description', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'og:title', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'og:url', content: 'https://theojs.cn/' }],
  ['meta', { name: 'og:image', content: 'https://i.theojs.cn/avatar.webp' }],
  ['meta', { name: 'og:description', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'twitter:description', content: 'Theo-Messi Homepage' }],
  [
    'meta',
    { name: 'twitter:image', content: 'https://i.theojs.cn/avatar.webp' }
  ],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://theojs.cn/',
        name: 'Theo-Messi Homepage',
        description: 'Theo-Messi Homepage',
        author: { '@type': 'Person', name: 'Theo-Messi' }
      })
    }
  ]
]
