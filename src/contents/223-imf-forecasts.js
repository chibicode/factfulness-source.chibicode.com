import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={361}>
        国際通貨基金による過去の予測精度についてのわたしたちのコメントは、国際通貨基金による世界経済見通し(IMF[2])のデータを対象にしている
      </H.FB>
      IMF forecasts are used for speculations about future growth in the stock
      and finance industry, as
      <H.A href="https://www.bbc.com/news/business-22228223">BBC News</H.A>{' '}
      points out.
      <H.A href="https://seekingalpha.com/article/4117923-2017-q4-stock-market-outlook-u-s-economy-reaching-peak">
        Here
      </H.A>
      is one example of such speculations.
    </p>
    <p>
      See <H.A href="http://www.gapm.io/eecof">www.gapm.io/eecof</H.A>. The
      following graphs are from IMF forecast track record, based on the World
      Economic Outlook from previous years IMF[2-10]:
    </p>
    <p>Advanced economies</p>
    <p>
      <img src="/static/images/sources/imf-advanced.jpg" alt="" />
    </p>
    <p>Sub-Saharan Africa</p>
    <p>
      <img src="/static/images/sources/imf-ssa.jpg" alt="" />
    </p>
    <p>Where growth happened</p>
    <p>
      <img src="/static/images/sources/imf-top-growth.jpg" alt="" />
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.gapm.io/xihlex">
          IHME[1] (Institute for Health Metrics and Evaluation) Global Burden of
          Disease Study 2016 (GBD 2016) All-cause Under-5 Mortality, Adult
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
  </>
)
