# 链式调用与异步处理

## 链式调用

所有模块方法返回的都是 Promise 代理对象，可以一路链式调用到底。你只需要在最外层使用一次 `await` 即可拿到最终结果：

```javascript
// 一次 await 拿到最终结果
let content = await $('fs').open('/config.txt').read();

// 带错误捕获
try {
    let content = await $('fs').open('/config.txt').read();
    $('debug').log('文件内容:', content);
} catch (e) {
    $('debug').log('读取失败:', e);
}
```

## 为什么不需要每个方法都 await？

网关内部对每次调用都做了 Promise 封装，每个方法返回的新代理对象已经携带了上一步的异步结果。所以可以连续调用，直到需要取值时才 `await`。

## .then() 写法

```javascript
$('fs').open('/config.txt').read().then(content => {
    $('debug').log('内容:', content);
}).catch(err => {
    $('debug').log('错误:', err);
});
```

## 回调参数

部分方法（如 `dialog.setButton`）接受回调函数，事件触发时自动调用：

```javascript
$('dialog').setButton(0, '确定', (result) => {
    $('debug').log('用户点击了确定', result);
}).show();
```
