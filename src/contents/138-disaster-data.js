import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    The International Disasters Database (see CRED) estimates that the
    earthquake in Nepal 2015 killed 9,034, injured 200,000 and affected 5.6
    million people. The government of Nepal estimates a slightly higher death
    toll of 10,000 deaths; see PDNA. To avoid underestimating the suffering, we
    have used the higher number from PDNA.{' '}
    <H.FB pageNumber={365}>
      2003年のヨーロッパの熱波についてのデータはUNISDRによるもの。
    </H.FB>
    estimating the total death toll for Western Europe to be 46,730 fatalities.
    その他の災害のデータはEM-DATによるもの。
    <H.FB pageNumber={365}>
      現在バングラデシュで洪水対策に使われている、すばらしいデジタル監視システムは
      <H.A href="http://www.ffwc.gov.bd">こちら</H.A>。
    </H.FB>
  </p>
)
