import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={370}>
        1995年の講義で使った乳幼児死亡率はユニセフによるもの(
        <H.A href="https://www.unicef.org/about/history/files/sowc_1995.pdf">
          UNICEF[1]
        </H.A>
        )。本書では当初よりも新しい2017年のデータを使っている。
      </H.FB>
      これは
      <H.A href="http://www.childmortality.org/">UN-IGME</H.A>
      によるもので、ユニセフ、世界保健機関、国連、世界銀行の合同データプロジェクトだ。
    </p>
    <p>
      1995年のハンスの講義で使った乳幼児死亡率の推定は、現在の推定とほとんど変わらない。1995年の推定はこちら:
    </p>
    <ul>
      <li>サウジアラビア: 1000人中292人 (1960年) → 38人 (1993年)</li>
      <li>マレーシア: 105人 (1960年) → 17人 (1993年)</li>
      <li>ブラジル: 181人 (1960年) → 63人 (1993年)</li>
      <li>タンザニア: 249人 (1960年) → 167人 (1993年)</li>
    </ul>
  </>
)
