# 『ファクトフルネス』ウェブ脚注/正誤表

### [https://factfulness-source.chibicode.com](https://factfulness-source.chibicode.com)

これは、2019年1月に日経BPから発売された訳書『ファクトフルネス』のウェブ脚注/正誤表です。

> [FACTFULNESS(ファクトフルネス)10の思い込みを乗り越え、データを基に世界を正しく見る習慣](https://www.amazon.co.jp/dp/B07LG7TG5N/ref=cm_sw_r_tw_dp_U_x_kZQuCbNDHEY8V)<br />
> ハンス・ロスリング (著), オーラ・ロスリング (著), アンナ・ロスリング・ロンランド (著), 上杉 周作  (翻訳), 関 美和 (翻訳)<br />
> 日経BP社

## ライセンスについて

- 前述した『FACTFULNESS(ファクトフルネス』の共訳者である上杉周作が作成しています。コンテンツとは関係ないコードについては、[MITライセンスで公開しています](LICENSE-CODE.md)。
- ギャップマインダーがオンライン上([www.gapminder.org](https://www.gapminder.org))で公開しているコンテンツはすべてCC BY 4.0ライセンスです([参考](https://www.gapminder.org/free-material/))。

## プライバシーポリシー

- 当サイトではGoogleアナリティクスを利用しており、トラフィックデータの収集のためにCookieを使用しています。データは(IPアドレスを含め)匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。詳しくは[こちら](https://www.google.com/analytics/terms/jp.html)をご覧ください。

## 作者について

**上杉周作** - 『ファクトフルネス』共訳者

- [メール](mailto:shu@chibicode.com)
- [ブログ](https://jp.chibicode.com)

## フレームワークについて

Next.jsを利用しています。

```
yarn install
yarn dev
```

### 文字数の計算

```js
// 全脚注
[...document.querySelectorAll('.content')].map(x => x.innerText).join('').replace(/\s/g, '').length

// 本の脚注からの引用
[...document.querySelectorAll('.from-book')].map(x => x.innerText).join('').replace(/\s/g, '').length
```