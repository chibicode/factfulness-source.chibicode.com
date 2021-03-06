import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      それぞれの数字は覚えやすいように10億人単位で四捨五入している。所得は国の購買力をもとに調整されており、2011年国際ドルを基にしている。それぞれの所得レベルごとの人数の推定は以下の通り
      (<H.A href="http://gapm.io/incm">Gapminder[8]</H.A>):
    </p>
    <ul>
      <li>レベル1: 7億5000万人。1日の所得は2ドル以下。</li>
      <li>レベル2: 33億人。1日の所得は2ドルから8ドル。</li>
      <li>レベル3: 25億人。1日の所得は8ドルから32ドル。</li>
      <li>レベル4: 9億人。1日の所得は32ドル以上。</li>
    </ul>
    <p>
      世界銀行の
      <H.A href="http://iresearch.worldbank.org/PovcalNet">
        PovcalNetの2013年のデータ
      </H.A>
      と、<H.A href="http://gapm.io/ximfw">IMF[1]</H.A>
      の予測を基にしている。世界銀行は、極度の貧困率を算出するのにPovcalNetを使っており、世界中の家庭で所得調査を行った結果が掲載されている。
    </p>
    <p>
      世界銀行は極度の貧困を「1日1.9ドル以下の所得」と定義しており、わたしたちの定義のレベル1と2の境目と近い。だが、1.9ドルというと実際と反して正確な調査である印象をもたらすため、わたしたちは2ドルを境にしている。
    </p>
  </>
)
