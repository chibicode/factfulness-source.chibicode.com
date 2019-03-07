import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      本書のp221にも書いた通り、現在、アフリカでは約5億人が極度の貧困にある。より正確な推定は4億1000万人だ(
      <H.A href="https://gapm.io/depov">Gapminder[9]</H.A>、
      <H.A href="http://iresearch.worldbank.org/PovcalNet">PovalCal[1]</H.A>、
      <H.A href="https://gapm.io/ximfw">IMF[1]</H.A>
      )。ただ、極度の貧困の推定には不確定要素が大きいことを忘れてはいけない。詳しくは
      <H.OtherCardLink permalink="9-fact-question-3-extreme-poverty">
        こちらの項目を参照
      </H.OtherCardLink>
      のこと。
    </p>
    <p>
      <H.FB pageNumber={361}>
        ポール・コリアーは、『最底辺の10億人─最も貧しい人のために本当になすべきことは何か』(2008年6月、中谷和夫訳、日経BP社)の中で、痩せ細った土地に縛られたり、紛争地帯に暮らしている、世界で最も貧しい人たちの未来を描いている。
      </H.FB>
    </p>
    <p>
      極度の貧困がどこにあるかを知るには、まず各地域の乳幼児死亡率を見ることだ。乳幼児死亡率は極度の貧困と密接に結びついている。これに加え、紛争地帯の場所、紛争地帯に暮らす人口、痩せた土地に暮らす人口などを併せて見ることで、極度の貧困がどこにあるかが分かる。
    </p>
    <ul>
      <li>
        紛争地帯の場所のソース:{' '}
        <H.A href="http://ucdp.uu.se/downloads">UCDP[2]</H.A>
      </li>
      <li>
        紛争地帯に暮らす人口のソース:{' '}
        <H.A href="http://www.gapm.io/xodi">ODI</H.A>、
        <H.A href="http://gapm.io/xpriod">PRIO</H.A>
      </li>
      <li>
        乳幼児死亡率のソース: <H.A href="http://gapm.io/xih5mr">IHME[6]</H.A>
      </li>
      <li>
        土地についてのソース: <H.A href="https://gapm.io/xcer">FAO[4]</H.A>
      </li>
    </ul>
    <p>紛争が続く限り、極度の貧困を脱するのは難しい。</p>
    <H.ExtremePoverty />
  </>
)
