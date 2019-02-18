import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Smilは著作
      <H.A href="https://gapm.io/xsmilen">“Energy Transitions” (2010)</H.A>
      にて、化石燃料依存からの脱却は人類にとっては難しい目標だとしている。そうでないと願いたいが、Smilは二酸化炭素の排出が劇的な速度で減ることは考えにくい理由を整然と説明している。地球がどうなるかは予測が難しいが、人のマクロな行動パターンはある程度予測がつく。大惨事が起きない限り、人類は手遅れになるまで化石燃料に依存し続けるだろう。
    </p>
    <p>
      <H.FB pageNumber={2012}>
        ポール・コリアー著『収奪の星─天然資源と貧困削減の経済学』(2012年、村井章子訳、みすず書房)には、さまざまな天然資源と、人類がそれらをどのように収奪し続けてきたかが記されている。「これ以上は無理」となるまで収奪は続くが、そうなった時には手遅れだ。
      </H.FB>
    </p>
    <p>
      また、
      <H.A href="https://ourworldindata.org/grapher/number-of-parties-env-agreements">
        OurWorldInData[7]
      </H.A>
      や、経済学者のエリノア・オストロム著“Governing the Commons”
      (1990)も参考になる。オストロムは、遠く離れた場所に暮らす人類が、いかにして共通の資源を濫用しないように努めてきたかを記している。詳しくは
      <H.A href="https://www.en.wikipedia.org/wiki/Elinor_Ostrom">
        Wikipediaを参考のこと
      </H.A>
      。
    </p>
    <p />
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://www.ourworldindata.org/grapher/number-of-parties-env-agreements">
            OurWorldInData[7] Number of parties in multilateral environmental
            agreements based on UNCTAD United Nations Treaty Collection.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
