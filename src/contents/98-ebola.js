import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      エボラのデータは世界保健機関のエボラ対策本部による報告書から引用した(
      <H.A href="http://gapm.io/xeboresp">WHO[3]</H.A>
      )。報告書には、流行開始から9ヶ月間の振り返りと、その後の予測が書かれている。
      <H.FB pageNumber={367}>
        エボラの緊急性を伝えるためにギャップマインダーがつくった配布物は
        <H.A href="https://gapm.io/vebol">こちら</H.A>。
      </H.FB>
      ハンスがエボラについて行なった講演は
      <H.A href="http://gapm.io/fp16">Factpod #6</H.A>と
      <H.A href="http://gapm.io/fp17">#8</H.A>から見れる。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xeboresp">
            WHO[3] WHO Ebola Response Team "Ebola Virus Disease in West
            Africa---The First 9 Months of the Epidemic and Forward
            Projections." New England Journal of Medicine 371 (October 6, 2014):
            1481--95.
          </H.A>{' '}
          DOI: 10.1056/NEJMoa1411100
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
