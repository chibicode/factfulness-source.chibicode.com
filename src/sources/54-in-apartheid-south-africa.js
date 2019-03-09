import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      現在、南アフリカの平均的な白人家族は、平均的な黒人家族の5倍のおカネを使っている。
      <H.A href="https://irr.org.za/">IRR</H.A>
      によると、1970年代のアパルトヘイト時代では、白人の平均所得はは黒人の約12倍だった。
      <H.A href="https://gapm.io/xuscps17">US-CPS</H.A>
      によると、2016年のアメリカでは、平均的な白人家族の所得は黒人家族の約1.6倍だった(白人:
      6万5041ドル、黒人: 3万9490ドル)。 また、
      <H.A href="http://www.gapm.io/xsa">こちらのBBCの記事では</H.A>
      、南アフリカにおいて人種が雇用と所得にどう影響してきたかをIRRのデータを用いて紹介している。
    </p>
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xsa">
            BBC Justice Malala. "Viewpoint: Does race matter in South Africa?"
            29 August 2012.
          </H.A>
        </li>
        <li>
          IRR (South African Institute of Race Relations) South Africa Survey
          Online 2009/2010. Employment and incomes.
        </li>
        <li>
          <H.A href="http://www.statssa.gov.za/publications/P0310/P03102014.pdf">
            STAT-SA (Statistics South Africa). Living Conditions of Households
            in South Africa 2014/2015. Table 2.2.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
