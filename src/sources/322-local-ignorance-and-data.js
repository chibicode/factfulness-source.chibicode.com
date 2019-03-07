import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={354}>
      アラン・スミスのTEDトーク
      <H.A href="https://www.ted.com/talks/alan_smith_why_we_re_so_bad_at_statistics?language=ja">
        『統計を好きになるべき理由』
      </H.A>
      をぜひとも見てほしい。スミスはイギリスでの勘違いの事例をあげている。ギャップマインダーでは、地域の人口動態が目でみてすぐにわかるような動くマップをつくりをはじめている。
      <H.A href="https://www.gapminder.org/topics/stockholm-data/">
        こちらのリンクの
      </H.A>
      再生ボタンをクリックすると、ストックホルムの人口ほとんどが豊かになり、教育程度が上がっていることがわかる。一方で、ストックホルムの政治議論を聞いていると事実とは逆に格差が広がっているように感じてしまう。
    </H.FB>
  </p>
)
