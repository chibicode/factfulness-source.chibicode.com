import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={363}>
      ここで使った出生数と人口のデータは、1970年のモザンビークの人口調査と、ナカラ病院による記録と、UN-IGME
      of 2017を基にしている。
    </H.FB>
    The deaths in the hospital are based on Hans's own notes. The official child
    mortality estimate for the whole country was probably different back then.
    For this calculation example, we use the latest available estimate for that
    year from <H.A href="http://www.childmortality.org/">UN-IGME</H.A> of 2017.
    Mozambique was the poorest country in the world in 1979, according to the
    World Bank's latest available estimates; see
    <H.A href="https://www.gapminder.org/whc">www.gapminder.org/whc</H.A>. According
    to <H.A href="http://gapm.io/xwhowf">WHO[8]</H.A>, the number of doctors per
    100,000 people in 1980 was 2.2 in Sweden, and 0.0255 in Mozambique. After
    the liberation in Mozambique, extremely few doctors remained in the remote
    districts; see World Bank[24].
  </p>
)
