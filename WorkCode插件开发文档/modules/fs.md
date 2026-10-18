# 模块: fs（文件系统）

文件读写模块，需声明 `"file.read"` 和 / 或 `"file.write"` 权限。

## 路径规则

- 所有路径相对于项目根目录（`ProjectPath`）。
- 禁止路径遍历（`../` 会被拦截），沙箱限制在项目目录内。

## 文件操作

### `fs.open(path)`

打开文件，返回文件句柄对象用于后续读写。

```javascript
let file = await $('fs').open('/src/app.js');
```

## 读取（需 `file.read` 权限）

| 方法 | 说明 | 示例 |
|------|------|------|
| `file.read()` | 读取文件全部文本 | `let c = await $('fs').open('/a.txt').read()` |
| `fs.readdir(path?)` | 读取目录列表 | `let list = await $('fs').readdir('/src')` |
| `fs.exists(path?)` | 检查路径是否存在 | `let ok = await $('fs').exists('/a.txt')` |
| `file.stat()` | 获取当前文件详情 | `let s = await file.stat()` |

`readdir` 返回示例：

```json
[
    {"name": "app.js", "isDir": false, "size": 1024},
    {"name": "assets", "isDir": true, "size": 0}
]
```

## 写入（需 `file.write` 权限）

| 方法 | 说明 | 示例 |
|------|------|------|
| `file.write(content)` | 覆盖写入 | `await file.write('hello')` |
| `file.append(content)` | 追加写入 | `await file.append('\nmore')` |
| `file.delete()` | 删除文件 | `await file.delete()` |
| `fs.mkdir(path)` | 递归创建目录 | `await $('fs').mkdir('/new/dir')` |

```javascript
// 链式写入
await $('fs').open('/config.txt').write('new content');

// 链式读取
let content = await $('fs').open('/config.txt').read();
```
