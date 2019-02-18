import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={366}>
        紀元前 8000 年から現在までの人口のグラフは、経済史学者のマ
        ティアス・リンドグレーンが何百もの資料をもとに作成したデータを利用している
        (Lindgren(2006-2016)。グラフ下部に表記しているのは主な出典のみ。
      </H.FB>
    </p>
    <p>1800年〜1930年の130年間に、人口は10億人増えた。</p>
    <ul>
      <li>1800年 → 推定9億4676万4816人</li>
      <li>1812年 → 推定10億32万5622人</li>
      <li>1929年 → 推定20億1704万5912人</li>
    </ul>
    <p>
      過去の人口の推計は国連による
      <H.A href="http://www.un.org/esa/population/publications/sixbillion/sixbillion.htm">
        The World at Six Billion
      </H.A>
      という資料に詳しい。国連による
      <H.A href="http://www.un.org/esa/population/publications/sixbillion/sixbilpart1.pdf">
        西暦0年からはじまる推計はこちら
      </H.A>
      。また、CaldwellとSchindlmayrによる1950年以前の推計はこちら:{' '}
      <H.A href="https://www.jstor.org/stable/3092809">
        Historical Population Estimates: Unraveling the Consensus
      </H.A>{' '}
      (2002, Population and Development Review (pp. 183--204))。
    </p>
  </>
)
