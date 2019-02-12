import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={362}>
      豚インフルエンザのデータは
      <H.A href="http://www.who.int/csr/disease/swineflu/updates/en/index.html">
        WHO[17]
      </H.A>
      、結核のデータはWHO[10](
      <H.A href="http://www.who.int/gho/tb/">
        Global Health Observatory data
      </H.A>
      )と<H.A href="http://www.gapm.io/xmdrtb">WHO[11]</H.A>によるもの。
    </H.FB>
    For the risk for multidrug resistant TB strains, see WHO[17].
  </p>
)
