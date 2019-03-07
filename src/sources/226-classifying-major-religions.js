import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={361}>
        ほとんどの国では、人口の過半数が世界的な宗教のひとつを信仰していて、チャートを見ればどの国がどの宗教に属しているかがわかる。しかし、どの宗教が多数派かがはっきりしない国も多い。
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={360}>
        たとえば、
        <H.A href="http://gapm.io/xpewrel1">
          ピュー研究所のデータ(Pew[2,3]: Religious Composition by Country)
        </H.A>
        に基づいてわたしたちが算出したところ、ニカラグアでは2010年時点で人口の49%がキリスト教徒で、48%がイスラム教徒だった。
      </H.FB>
      ちなみにピュー研究所は、2010年のデータと未来のデータを掲載している。
    </p>
    <p>
      <H.FB pageNumber={360}>
        主要な宗教がはっきりしない81カ国については、それぞれの宗教を3つの丸で表し、ピュー研究所(
        <H.A href="https://gapm.io/xpewrel1">Pew[2]</H.A>
        )とアメリカ合衆国国際開発庁による人口保健調査(
        <H.A href="https://gapm.io/xdhsarel">USAID-DHS[2]</H.A>
        )のデータに基づいてそれぞれの出生率を推測した。また、各宗教のおよそのひとり当たり所得については、経済協力開発機構
        およびほかの情報源(
        <H.A href="https://globaldatalab.org/areadata">GDL[1]</H.A>,
        <H.A href="https://globaldatalab.org/iwi">GDL[2]</H.A>,
        <H.A href="https://gapm.io/xoecdimintegr">OECD[3]</H.A>)から推測した。
      </H.FB>
    </p>
  </>
)
