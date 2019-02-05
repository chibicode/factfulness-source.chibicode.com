import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={2} />

    <H.P>
      <H.FB pageNumber={372}>
        正解はB。世界の大半の人は中所得国に住んでいる。
      </H.FB>
      質問1と同じく、それぞれの所得グループの定義は意図的に省いている。「低所得国」という言葉を人々がどのように受け取るかを調べるためだ。
    </H.P>

    <H.P>
      <H.FB pageNumber={372}>
        世界銀行は(<H.A href="(http://gapm.io/xwb172)">World Bank[2]</H.A>
        )、ひとりあたりの国民総生産(現在のUSドル)をもとに国々をいくつかのグループに分けている。低所得国に暮らすのは世界の人口の9%。中所得国に暮らすのは世界の人口の76%。残りの16%は高所得国に暮らしている(
        <H.A href="http://gapm.io/xwb174">World Bank[4]</H.A>)。
      </H.FB>
      分類方法は以下の通り。
    </H.P>
    <ul>
      <li>
        <strong>低所得国:</strong>
        <ul>
          <li>ひとり当たり国民総生産: $1,005以下</li>
          <li>31カ国</li>
          <li>人口: 7億人</li>
        </ul>
      </li>
      <li>
        <strong>中所得国:</strong>
        <ul>
          <li>ひとり当たり国民総生産: $1,006〜$12,235</li>
          <li>109カ国</li>
          <li>人口: 56億人</li>
        </ul>
      </li>
      <li>
        <strong>高所得国:</strong>
        <ul>
          <li>ひとり当たり国民総生産: $12,236以上</li>
          <li>78カ国</li>
          <li>人口: 12億人</li>
        </ul>
      </li>
    </ul>
    <p>
      この質問についてさらに<a href="http://gapm.io/q2">詳しくはこちら</a>。
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xwb172">
          World Bank[2] &quot;World Bank Country and Lending Groups.&quot;
          2017/11/6閲覧。
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xwb174">
          World Bank[4] &quot;Population of Country Income Groups in
          2015---Population, total.&quot; 2017/11/7閲覧。
        </a>
      </li>
    </ul>
  </>
)
