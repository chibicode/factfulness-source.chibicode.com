import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={373}>
        この本を開いたとき、最初に読者が目にするのはカラフルな世界保健チャート(2017年版)だ。
      </H.FB>
      国連加盟国のうち、バチカン市国など、人口が極端に少ない国を除く182カ国を掲載している。
      <H.FB pageNumber={373}>
        それぞれの丸は国を表している。丸の大きさは人口、色は地域に対応している。
      </H.FB>
    </p>
    <p>
      ギャップマインダーはすべての国を地域ごとに4つに分類し、それぞれ色分けしている。アメリカ大陸は緑、アフリカは青、アジアとオセアニアは赤、ヨーロッパは黄色だ。グリーンランド、ロシア、一部の中央アジアもヨーロッパに分類している。どの国がどの地域に属すかは
      <H.A href="http://www.gapm.io/ireg">こちらに書いている</H.A>。
    </p>
    <p>
      <H.FB pageNumber={373}>
        横軸はひとりあたりのGDP(購買力平価ベース、2011年国際ドル)を表している。
      </H.FB>
      ギャップマインダーが定義した
      <H.A href="http://gapm.io/elev">4つの所得レベル</H.A>
      と、対数目盛を利用している。
      <H.FB pageNumber={373}>
        縦軸は平均寿命を表している。人口のデータは
        <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>、GDPのデータは
        <H.A href="http://gapm.io/xwb171">World Bank[1]</H.A>、
        平均寿命のデータは<H.A href="http://gapm.io/ximfw">IHME[1]</H.A>
        によるもの。上記の通り、一部の2017年のデータはギャップマインダーが算出している(
        <H.A href="http://gapm.io/dgdppc">Gapminder[2]</H.A>、
        <H.A href="http://gapm.io/ilex">Gapminder[4]</H.A>)。
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={373}>
        このチャートは
        <H.A href="https://www.gapminder.org/whc/">こちらから</H.A>
        オンラインで無料で閲覧できる。
      </H.FB>
    </p>
  </>
)
