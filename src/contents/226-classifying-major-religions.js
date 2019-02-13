import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      When classifying countries based on religion, we no longer use the term
      'majority religion'. We only use this term when talking about the 40
      countries back in 1960 (p. 175 in Factfulness) for comparison. Estimates
      of <H.A href="http://gapm.io/xpewrel1">Religious Composition by Country</H.A>
      by Pew Research Center show percentages of those affiliated with any
      religion (or not) by country as of 2010 and in the future.
      <H.FB pageNumber={361}>
        ほとんどの国では、人口の過半数が世界的な宗教のひとつを信仰していて、チャートを見ればどの国がどの宗教に属しているかがわかる。しかし、どの宗教が多数派かがはっきりしない国も多い。たとえば、ピュー研究所のデータ(Pew[2,3])に基づいてわたしたちが算出したところ、ニカラグアでは2010年時点で人口の49%がキリスト教徒で、48%がイスラム教徒だった
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={360}>
        主要な宗教がはっきりしない81カ国については、それぞれの宗教を3つの丸で表し、ピュー研究所(Pew[2])とアメリカ合衆国国際開発庁による人口保険調査(USAID-DHS[2])のデータに基づいてそれぞれの出生率を推測した。また、各宗教のおよそのひとり当たり所得については、経済協力開発機構
        およびほかの情報源(GDL[1,2],OECD[3])から推測した
      </H.FB>
    </p>
  </>
)
