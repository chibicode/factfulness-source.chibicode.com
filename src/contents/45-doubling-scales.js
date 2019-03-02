import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={369}>
        本書では、人々の所得レベルや国の平均所得を比べるときは、グラフの軸に倍増する目盛を利用している。
      </H.FB>
      1ドルの価値は、所得レベルによって大きく異なるからだ。地震の強さを表すマグニチュード、音量を表すデシベル、酸性やアルカリ性を表すpHなど、
      <H.FB pageNumber={369}>
        小さい数字同士の小さな差と、大きい数字同士の大きな差が同じくらい重要なとき、倍増する目盛(対数目盛)は役に立つ。
      </H.FB>
    </p>
    <p>
      対数目盛を使うのは恣意的ではない。対数目盛を使う方が、現実を正しくグラフで表すことができるからだ。たとえば収入がアップする場合、上がったぶんの絶対値ではなく、以前の収入に比べて何割増えたかのほうが大事だ。これを限界効用逓減の法則と呼び、グラフで表すには対数目盛が適している。ダニエル・カーネマン著『ファスト&スロー』(2014年、村井章子訳、早川書房)によると、1738年にDaniel
      Bernoulliがこの概念をはじめに提唱した。
    </p>
    <p>また、対数目盛に関しては本書でも123ページに詳しく書いてある。</p>
  </>
)
