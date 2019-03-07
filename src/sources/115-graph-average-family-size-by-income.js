import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      所得別の女性ひとりあたりの子供の数のグラフには、世界銀行による
      <H.A href="https://gapm.io/xwb175">最新のデータ</H.A>
      を使った。これによると、2013年には世界人口の10.7%が極度の貧困に暮らしていた。わたしたちはこのデータと、IMFによるひとりあたりGDPの予測をもとに、
      <H.A href="http://gapm.io/depov">2017年のデータを算出した</H.A>
      。その結果、2017年に1日2ドル以下で暮らすのは7億5000万人と推定した(世界人口75.5億人の10%)。国連と世界銀行は極度の貧困を「1日1.9ドル以下の所得」と定義している。だが、1.9ドルというと実際と反して正確な調査である印象をもたらすため、わたしたちは2ドルを境にしている。
    </p>
    <p>
      女性ひとりあたりの子供の数の推定は
      <H.FB pageNumber={366}>
        <H.A href="http://countdown2030.org/">Countdown to 2030</H.A>と
        <H.A href="https://globaldatalab.org/areadata">GDL[1]</H.A>、
        <H.A href="https://globaldatalab.org/iwi">GDL[2]</H.A>
        のデータを基にしている。このデータは
        <H.A href="http://mics.unicef.org">UNICEF-MICS</H.A>、
        <H.A href="https:// dhsprogram.com">USAID-DHS[1]</H.A>、
        <H.A href="https://gapm.io/xipums">IPUMS</H.A>
        などが行った何百もの調査の結果だ。
      </H.FB>
      家庭調査のデータを使うことによって、国の平均を見た場合よりも、レベルごとの世帯人数が正確にわかる。ちなみにこれらの調査データでは、貧しい家庭の所得を計測するのに「家のひと部屋あたりの人数」「家の床が何でできているか」「移動手段は何か」などを使っている。
      所得レベルについて詳しくは
      <H.A href="http://www.gapm.io/elev">こちらを参照のこと(準備中)</H.A>。
    </p>
  </>
)
