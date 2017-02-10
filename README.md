# webpack-migrating-from-v1-to-v2
Migrating from v1 to v2

## 抽出方法
`https://webpack.js.org/guides/migrating`で以下のコマンドを実行

```javascript
Array.from($$('h2')).forEach(e => {
  const id = e.querySelector('a').getAttribute('id')
  console.log(`## [${e.textContent}](https://webpack.js.org/guides/migrating/#${id})`);
});
```
