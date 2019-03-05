# factfulness-source.chibicode.com

### 文字数の計算

```
// 全脚注
[...document.querySelectorAll('.content')].map(x => x.innerText).join('').replace(/\s/g, '').length

// 本の脚注からの引用
[...document.querySelectorAll('.from-book')].map(x => x.innerText).join('').replace(/\s/g, '').length
```