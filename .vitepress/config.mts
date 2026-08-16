import { defineConfig } from 'vitepress'
import { teekConfig } from './teekConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    srcExclude: ['README.md'],
    extends: teekConfig,
    title: '小枫_QWQ 项目文档站',
    description: '此站点汇集了小枫_QWQ https://xiaofengqwq.com/ 所有项目的相关文档或者其他文档资料',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local'
        },

        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/docs' },
            { text: '关于', link: '/about' },
        ],

        sidebar: {
            '/图灵测试/md组件/': [
                {
                    text: '聊天室 MD 组件',
                    items: [
                        { text: '聊天室 MD 格式完整教程（v3 标准）', link: '/图灵测试/md组件/01.v3MD格式完整教程' },
                        { text: 'v3 MD 按钮功能文档', link: '/图灵测试/md组件/02.v3MD按钮与点击限制' },
                        { text: 'v3 MD 完整功能演示', link: '/图灵测试/md组件/03.v3MD完整演示' },
                        { text: 'v3 游戏模板（骰子·猜拳·谁是卧底）', link: '/图灵测试/md组件/04.v3游戏模板（骰子·猜拳·谁是卧底）' },
                        { text: 'v3 高级组件教程（画板·动作链）', link: '/图灵测试/md组件/05.v3高级组件教程（画板·动作链）' },
                    ]
                },
            ],
            '/图灵测试/api接口/': [
                {
                    text: 'API 接口文档',
                    items: [
                        { text: 'HTTP API', link: '/图灵测试/api接口/01.HTTP接口文档' },
                        { text: 'WebSocket API', link: '/图灵测试/api接口/02.WebSocket接口文档' },
                        { text: 'TuringTalk 接口完整文档', link: '/图灵测试/api接口/03.TuringTalk接口完整文档' },
                        { text: '聊天室结构化消息解析', link: '/图灵测试/api接口/04.聊天室结构化消息解析' },
                    ]
                },
            ],
            '/XQF授权平台/': [
                {
                    text: 'XQF 授权平台',
                    items: [
                        { text: '项目首页', link: '/XQF授权平台/' },
                        { text: '插件机制', link: '/XQF授权平台/01.插件机制' },
                    ]
                },
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/XiaoFeng-QWQ/' }
        ]
    }
})
