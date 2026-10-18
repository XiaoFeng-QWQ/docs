# 模块: event

事件订阅模块，无需声明权限。

## 方法

### `event.subscribe(eventName, callback)`

订阅系统事件。

| 参数 | 类型 | 说明 |
|------|------|------|
| eventName | String | 事件名称 |
| callback | Function | 事件触发时的回调 |

```javascript
$('event').subscribe('work.editorLoaded', (data) => {
    $('debug').log('编辑器加载完成', data);
});
```

## 内置事件

| 事件名 | 说明 |
|--------|------|
| `work.editorLoaded` | 编辑器组件加载完成时触发 |
| `work.fileListLoaded` | 文件列表加载完成时触发 |
