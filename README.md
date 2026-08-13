# 小枫_QWQ 项目文档站

此站点汇集了小枫_QWQ（https://xiaofengqwq.com/）所有项目的相关文档或者其他文档资料。

## 收录的项目

| 项目 | 开源地址 |
|------|----------|
| 图灵测试（对面是 AI 吗） | https://github.com/XiaoFeng-QWQ/TuringTalk |
| XQF 授权平台 | https://codeberg.org/XiaoFengQWQ/xqacf |

## 技术栈

基于 [VitePress](https://vitepress.dev/) 与 [vitepress-theme-teek](https://github.com/vuejs/theme-teek) 构建。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态站点
npm run docs:build

# 预览构建产物
npm run docs:preview
```

## 目录结构

```
.
├── .vitepress/          # 站点配置与主题
├── 图灵测试/            # 图灵测试项目文档
├── XQF授权平台/         # XQF 授权平台项目文档
├── index.md             # 首页
├── docs.md              # 文档总览
└── about.md             # 关于页
```

## 许可证

本文档站的文档内容采用 [知识共享署名 4.0 国际许可证（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/) 授权，详见 [LICENSE](./LICENSE)。
