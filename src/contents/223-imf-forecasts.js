import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={361}>
        国際通貨基金による過去の予測精度についてのわたしたちのコメントは、国際通貨基金による世界経済見通し(IMF[2])のデータを対象にしている
      </H.FB>
      <H.A href="https://www.bbc.com/news/business-22228223">BBC</H.A>
      も指摘しているように、IMFの予測は株式市場や金融機関で使われる。株式市場が反応した一例は
      <H.A href="https://seekingalpha.com/article/4117923-2017-q4-stock-market-outlook-u-s-economy-reaching-peak">
        こちら
      </H.A>
      )。
    </p>
    <p>以下のグラフはIMFの予測の制度を表している[IMF2-10]。</p>
    <H.SmallHeading>レベル4の各国</H.SmallHeading>
    <p>
      <img src="/static/images/sources/imf-advanced.jpg" alt="" />
    </p>
    <H.SmallHeading>サハラ以南のアフリカ</H.SmallHeading>
    <p>
      <img src="/static/images/sources/imf-ssa.jpg" alt="" />
    </p>
    <H.SmallHeading>経済成長が特に高かったのは以下の国々だ</H.SmallHeading>
    <p>
      <img src="/static/images/sources/imf-top-growth.jpg" alt="" />
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xihlex">
            IHME[1] (Institute for Health Metrics and Evaluation) Global Burden
            of Disease Study 2016 (GBD 2016) All-cause Under-5 Mortality, Adult
            Mortality, and Life Expectancy 1970-2016. Table 13A. Select Lancet
            article tables (2017).
          </H.A>
        </li>
        <li>
          <H.A href="http://www.esa.un.org/unpd/wpp">
            UN-Pop[1] (UN Population Division) Population, medium fertility
            variant. World Population Prospects 2017.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
