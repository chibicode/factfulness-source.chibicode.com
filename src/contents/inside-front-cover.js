import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={373}>
        この本を開いたとき、最初に読者が目にするのはカラフルな世界保健チャート(2017年版)だ。
      </H.FB>
      When you open the book, you see a colorful chart: the World Health Chart
      2017. This chart shows 182 states recognized by the UN, only excluding
      those with the smallest populations (such as the Vatican).
      <H.FB pageNumber={373}>
        それぞれの丸は国を表している。丸の大きさは人口、色は地域に対応している。
      </H.FB>
    </p>
    <p>
      Gapminder has defined four regions, and color coded each of them: green
      for the Americas, blue for Africa, red for Asia and Australia, and yellow
      for Europe, including Greenland, Russia, and some parts of Central Asia.
      Read more about the&nbsp;
      <H.A href="http://www.gapm.io/ireg">
        four regions we use in our global graphs
      </H.A>
      .
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
