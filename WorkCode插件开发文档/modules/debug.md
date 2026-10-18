# 模块: debug

调试日志模块，无需声明权限即可使用。

## 方法

### `debug.log(...args)`

输出日志到控制台，前缀 `[EXTLOG]:`。

**参数：** 任意数量，自动拼接为字符串。

```javascript
$('debug').log('Hello', 'World', 123);
// 控制台输出: [EXTLOG]: Hello World 123
```
