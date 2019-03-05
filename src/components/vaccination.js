import React from 'react'
import * as H from './h'

const Vaccination = () => (
  <>
    <p>
      <H.BlockAdditionHeader />
      2017年に最も世界で接種率が高かった(88%)結核ワクチンの接種率の推移はこちら。
      <H.A href="http://gapm.io/xwhoim">このリンクから</H.A>、BCG→Immunization
      coverage estimates by WHO regionを選択すれば見れる。
    </p>
    <p>
      <img src="/static/images/sources/bcg-rate.jpg" />
    </p>
  </>
)

export default Vaccination
