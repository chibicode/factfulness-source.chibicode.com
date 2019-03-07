import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g22.png" />
    <p>
      1ヘクタールあたりの穀物生産量は50年前と比べて約2.8倍になった。詳しくは国際連合食糧農業機関のデータ(
      <H.A href="http://www.gapm.io/xcer">FAO[4]</H.A>)を参考のこと。
    </p>
    <H.GraphExplanation />
  </>
)
