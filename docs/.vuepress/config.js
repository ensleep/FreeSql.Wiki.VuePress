

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'FreeSql 官方文档',
            description: 'FreeSql Documents'
        },
        '/en/': {
            lang: 'en-US',
            title: 'FreeSql Documents',
            description: 'FreeSql Documents'
        }
    },
    theme: '@vuepress/default',
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: `/favicon-16x16.png`,
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: `/favicon-32x32.png`,
            },
        ],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'application-name', content: 'VuePress' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        ],
        [
            'link',
            { rel: 'apple-touch-icon', href: `/apple-touch-icon.png` },
        ],
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        // ...其他标签
    ],
    bundler:
        // use vite in dev, use webpack in prod
        (isProd ? '@vuepress/webpack' : '@vuepress/vite'),
    themeConfig: {
        logo: '/logo.png',
        repo: '2881099/FreeSql.Wiki.VuePress',
        // docsRepo: 'https://github.com/2881099/FreeSql.Wiki.VuePress',
        docsDir: 'docs',
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        locales: {
            '/': {
                navbar: [
                    { text: '指南', link: '/guide/' },
                    {
                        text: '参考', children: [
                            {
                                text: '参考',
                                children: [
                                    '/reference/api.md',
                                    '/reference/change-log.md',
                                    '/reference/vs-dapper.md',
                                    '/reference/vs-entity-framework.md'
                                ]
                            },
                            {
                                text: '学习与交流',
                                children: [
                                    '/reference/faq.md',
                                    '/reference/donation.md',
                                    '/reference/awesome-freesql.md',
                                ]

                            }
                        ]
                    },
                    {
                        text: 'API', children: [
                            {
                                text: '学习与交流',
                                children: [
                                    {
                                        text: '浏览API',
                                        link: 'https://docs.dotnet-china.org/FreeSql/api/index.html'
                                    },
                                    {
                                        text: '浏览API（国内镜像）',
                                        link: 'http://124.70.130.97:8082/api/index.html'
                                    },
                                    {
                                        text: '提Issues',
                                        link: 'https://github.com/2881099/FreeSql/issues/new'
                                    },
                                    {
                                        text: 'NuGet',
                                        link: 'https://www.nuget.org/packages?q=freesql'
                                    }
                                ]

                            }
                        ]
                    },
                ],
                sidebar:
                {
                    '/guide/': [
                        {
                            isGroup: true,
                            text: '基础文档',
                            children: [
                                '/guide/README.md',
                                '/guide/getting-started.md',
                                '/guide/install.md',
                                '/guide/insert.md',
                                '/guide/delete.md',
                                '/guide/update.md',
                                '/guide/insert-or-update.md'
                            ]
                        },
                        {
                            isGroup: true,
                            text: '查询',
                            children: [
                                '/guide/select.md',
                                '/guide/paging.md',
                                '/guide/select-single-table.md',
                                '/guide/select-multi-table.md',
                                '/guide/select-group-by.md',
                                '/guide/select-return-data.md',
                                '/guide/select-lazy-loading.md',
                                '/guide/select-include.md',
                                '/guide/linq-to-sql.md',
                                '/guide/withsql.md',
                                '/guide/select-as-tree.md',
                            ]
                        },
                        {
                            isGroup: true,
                            text: '仓储层',
                            children: [
                                '/guide/repository.md',
                                '/guide/unit-of-work.md',
                                '/guide/cascade-saving.md',
                                '/guide/unitofwork-manager.md'
                            ]
                        },
                        {
                            isGroup: true,
                            text: 'DbContext',
                            children: [
                                '/guide/db-context.md',
                                '/guide/ifreesql-context.md',
                            ]
                        },
                        {
                            isGroup: true,
                            text: 'CodeFirst',
                            children: [
                                '/guide/code-first.md',
                                '/guide/entity-attribute.md',
                                '/guide/fluent-api.md',
                                '/guide/custom-attribute.md',
                                '/guide/type-mapping.md',
                                '/guide/navigate-attribute.md'
                            ]
                        },
                        '/guide/db-first.md',
                        '/guide/expression-function.md',
                        '/guide/transaction.md',
                        '/guide/filters.md',
                        '/guide/ado.md',
                        '/guide/aop.md',
                        '/guide/read-write-splitting.md',
                        '/guide/sharding.md',
                        '/guide/multi-tenancy.md',
                        '/guide/performance.md',
                        '/guide/more.md'
                    ],
                    '/reference/': [{
                        isGroup: true,
                        text: '参考',
                        children: [
                            '/reference/api.md',
                            '/reference/change-log.md',
                            '/reference/vs-dapper.md',
                            '/reference/vs-entity-framework.md'
                        ]
                    },
                    {
                        isGroup: true,
                        text: '学习与交流',
                        children: [
                            '/reference/faq.md',
                            '/reference/donation.md',
                            '/reference/awesome-freesql.md'
                        ]
                    }

                    ]

                },
                selectLanguageName: '简体中文',
                selectLanguageText: 'Languages',
                selectLanguageAriaLabel: 'Languages',

                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: true,
                lastUpdatedText: '上次更新',
                contributors: false,
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // other
                openInNewWindow: '在新窗口打开',
            },
            '/en/': {
                navbar: [
                    { text: 'Guide', link: '/en/guide/' },
                    { text: 'NuGet', link: 'https://www.nuget.org/packages?q=freesql' },
                    { text: 'Api', link: 'https://docs.dotnet-china.org/FreeSql/api/index.html' },
                ],
                sidebar:
                {
                    '/en/guide/': [
                        {
                            isGroup: true,
                            text: 'Basics',
                            children: [
                                '/en/guide/README.md',
                                '/en/guide/getting-started.md',
                                '/en/guide/install.md',
                                '/en/guide/insert.md',
                                '/en/guide/delete.md',
                                '/en/guide/update.md',
                                '/en/guide/insert-or-update.md'
                            ]
                        },
                        {
                            isGroup: true,
                            text: 'Query',
                            children: [
                                '/en/guide/select.md',
                                '/en/guide/paging.md',
                                '/en/guide/select-single-table.md',
                                '/en/guide/select-multi-table.md'
                            ]
                        },
                        {
                            isGroup: true,
                            text: 'CodeFirst',
                            children: [
                                '/en/guide/type-mapping.md',
                            ]
                        },
                    ]
                }
                ,
                selectLanguageName: 'English',
            }
        },
    },
    themePlugins: {
        // only enable git plugin in production mode
        git: isProd,
    },
    plugins: [
        [
            '@vuepress/plugin-pwa', {
                skipWaiting: true,
            },
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    },
                    '/en/': {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    }
                },
            },
        ],
        [
            '@vuepress/plugin-docsearch',
            {
                apiKey: 'd33b85d622e4b61625bf17443031804c',
                indexName: 'freesql',
                searchParameters: {
                    facetFilters: [''],
                },
                locales: {
                    '/': {
                        placeholder: '搜索文档',
                    },
                },
            },
        ],
        // [
        //     '@vuepress/plugin-shiki',
        //     {
        //         theme: 'dark-plus',
        //         langs: []
        //     },
        // ],
    ],
}