# Manifest 配置说明

每个拓展必须包含 `manifest.json`，用于描述元数据和声明所需模块权限。

## 完整示例

```json
{
    "engine": [0, 1, 0],
    "version": [0, 0, 1],
    "uuid": "01a0ca3f6d27725e8689c592443ae5fa",
    "icon": "@elephpant.png",
    "name": "PHP Intelephense Client",
    "introduce": "This is PHP Language Server Protocol, by intelephense",
    "src": "@main.js",
    "require_module": [
        "container",
        "file.read",
        "file.write",
        "layer",
        "editor"
    ]
}
```

## 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| engine | Array | 兼容的引擎版本 `[主版本, 大版号, 补丁号]` |
| version | Array | 拓展自身版本号 |
| uuid | String | 拓展唯一标识符（建议使用标准 UUID） |
| icon | String | 图标路径，`@` 开头表示相对拓展根目录 |
| name | String | 拓展名称 |
| introduce | String | 拓展介绍 |
| src | String | 入口 JS 文件路径，`@` 开头 |
| require_module | Array | 所需模块权限列表（见下表） |

## 可用权限

| 权限值 | 说明 |
|--------|------|
| `container` | 容器系统操作 |
| `file.read` | 文件读取 |
| `file.write` | 文件写入 |
| `layer` | 弹窗 / Toast 提示 |
| `editor` | 编辑器交互 |

> 未声明的模块在调用时会被网关拒绝，并返回 `Interface does not exist.`。
