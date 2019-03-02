import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      グラフについてはこちらの項目を参照のこと:{' '}
      <H.OtherCardLink
        useTitleAsChildren
        permalink="35-graph-the-world-in-1965"
      />
    </p>
    <p>
      <H.A href="http://www.childmortality.org/">UN-IGME</H.A>
      による乳幼児死亡率のデータは2016年まで。ここでは
      <H.A href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
        世界人口予測2017
      </H.A>
      の出生率中位予測を利用して2017年のデータを算出した(
      <H.A href="http://gapm.io/du5mr">Gapminder[6]</H.A>)。
    </p>
    <p>
      2017年に「途上国」の枠の中に入っているのは、世界人口の6.4%のみ。アンゴラ、ブルキナファソ、ブルンジ、チャド、コンゴ民主共和国、東ティモール、ガンビア、マリ、モザンビーク、ニジェール、ナイジェリア、ソマリア、ウガンダの13カ国だ。37カ国、世界人口の8.4%はふたつの枠の中にある。「先進国」の枠の中にあるのは134カ国。詳しくは
      <H.A href="http://gapm.io/voutdwv">こちら</H.A>を参照のこと。
    </p>
  </>
)
