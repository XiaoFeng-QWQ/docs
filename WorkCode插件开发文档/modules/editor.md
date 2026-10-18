# 模块: editor

编辑器交互模块，需声明 `"editor"` 权限。

## 获取编辑器实例

通过 `thisEditor()` 可直接获取当前唯一的 Monaco 编辑器对象，拿到后即可调用 Monaco 原生 API 进行任意操作：

```javascript
let editor = $('editor').thisEditor();
```

## 常用操作示例

```javascript
// 获取编辑器实例
let editor = await $('editor').thisEditor();

// 获取全部文本
let text = editor.getValue();

// 设置文本
editor.setValue('console.log("hello");');

// 获取当前选中内容
let selection = editor.getSelection();
let selectedText = editor.getModel().getValueInRange(selection);

// 在光标处插入文本
editor.trigger('keyboard', 'type', { text: '// 插入的注释\n' });

// 设置语言模式
monaco.editor.setModelLanguage(editor.getModel(), 'php');

// 跳转到指定行
editor.revealLine(42);
editor.setPosition({ lineNumber: 42, column: 1 });
```

> 获取编辑器实例后，可直接使用 Monaco Editor 的完整 API。
