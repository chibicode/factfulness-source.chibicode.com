import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={363}>
        ここで使った出生数と人口のデータは、1970年のモザンビークの人口調査と、ナカラ病院による記録と、UN-IGME
        of 2017を基にしている。
      </H.FB>
    </p>
    <p>
      病院で亡くなった子供の数はハンス自身の記録が基になっている。当時の政府による乳幼児死亡率の推定は、おそらく今と違っていただろう。ここでは、
      <H.A href="http://www.childmortality.org/">UN-IGME (2017)</H.A>
      による1970年のデータを利用している。
    </p>
    <p>
      <H.A href="https://www.gapminder.org/whc">世界銀行によると</H.A>
      、モザンビークは1979年に世界で最も貧しい国だった。また
      <H.A href="https://gapm.io/xwb1723">WHO[8]</H.A>
      によると、1980年の10万人あたりの医者の数はスウェーデンでは2.2人だったのに対し、モザンビークでは0.0255人だった。モザンビークが独立した際、ほとんどの医者は田舎を去ってしまったからだ。
    </p>
  </>
)
