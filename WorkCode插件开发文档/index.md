# WorkCode 插件开发文档

> 本文档为第三方项目 **WorkCode** 的插件（拓展）开发文档整理收录。
>
> - WorkCode 官网：https://wkc.hay.hk/
> - 所属：**HAY HK**（https://www.hay.hk/）· **M-Link HK**
> - 本文档站（小枫_QWQ）仅作资料转载与收录，WorkCode 项目的版权归 HAY HK / M-Link HK 所有，**并非小枫_QWQ 自己的项目**。

本文档介绍如何为 WorkCode 开发插件（拓展）。

## 快速开始

1. 创建拓展目录，包含 `manifest.json` 和入口 JS 文件（如 `main.js`）。
2. 在 `manifest.json` 中声明拓展信息和所需权限（`require_module`）。
3. 在 JS 中引入 `$` 函数，通过 `$('模块').方法()` 调用原生能力。
4. 支持链式调用，只需在最外层用一次 `await` 即可拿到最终结果。

## 目录结构示例

```
my-extension/
├── manifest.json
├── main.js
└── icon.png
```

## 引入 $

```javascript
import { $ } from "http://localhost:52888/extlib";
```

## 调用语法与链式写法

```javascript
// 链式调用，只需一次 await
let content = await $('fs').open('/config.txt').read();

// 不需要这样写（冗余）
// let file = await $('fs').open('/config.txt');
// let content = await file.read();
```

所有模块方法均返回代理对象（Promise），可一路链式调用到底，`await` 取最终值即可。

## 文档导航

- [Manifest 配置](/WorkCode插件开发文档/manifest)
- [链式调用与异步处理](/WorkCode插件开发文档/chain-and-async)
- [debug 调试模块](/WorkCode插件开发文档/modules/debug)
- [event 事件订阅模块](/WorkCode插件开发文档/modules/event)
- [editor 编辑器模块](/WorkCode插件开发文档/modules/editor)
- [layer 弹窗与提示模块](/WorkCode插件开发文档/modules/layer)
- [fs 文件系统模块](/WorkCode插件开发文档/modules/fs)
- [container 容器模块](/WorkCode插件开发文档/modules/container)
