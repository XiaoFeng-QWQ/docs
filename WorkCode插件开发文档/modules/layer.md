# 模块: layer（Toast & Dialog）

弹窗与提示模块，需声明 `"layer"` 权限。

## Toast 轻提示

### `toast.text(str)`

设置提示文本。

### `toast.show()`

显示提示（短时长自动消失）。

```javascript
$('toast').text('操作成功！').show();
```

## Dialog 对话框

采用链式调用设置属性，最后调用 `show()` 显示。

### `dialog.setTitle(title)`

设置标题。

### `dialog.setBody(body)`

设置内容。

### `dialog.setButton(type, label, callback)`

设置按钮。

| 参数 | 类型 | 说明 |
|------|------|------|
| type | Number | 0=确定, 1=取消, 2=中性, 3=其他 |
| label | String | 按钮文字 |
| callback | Function | 点击回调 |

### `dialog.show(cancelable?)`

显示对话框。`cancelable` 可选，默认 `true`（点击外部可关闭）。

```javascript
$('dialog').setTitle('确认')
    .setBody('删除该文件？')
    .setButton(0, '确定', () => {
        $('debug').log('已确认');
    })
    .setButton(1, '取消', () => {})
    .show(false);
```
