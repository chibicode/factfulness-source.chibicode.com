import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={368}>
      平均寿命のデータは保健指標評価研究所によるもの(
      <H.A href="http://gapm.io/xihlex">IHME[1]</H.A>
      )。2016年に平均寿命が50歳近くだったのはレソトと中央アフリカ共和国のみ。しかし、特にレベル1と2の国においては、データはとても不確かだ。データをどこまで疑うべきかは、
      <H.A href="https://www.gapminder.org/data/documentation/gd004/">
        こちらを参考にしてほしい
      </H.A>
      。
    </H.FB>
  </p>
)
