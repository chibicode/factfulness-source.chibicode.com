import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={367}>
        エボラのデータは世界保健機関によるもの(
        <H.A href="http://gapm.io/xeboresp">WHO[3]</H.A>)。
      </H.FB>{' '}
      The data is from <H.A href="http://gapm.io/xeboresp">WHO[3]</H.A>, the
      Ebola Response Team's research article evaluating the first 9 months of
      the outbreak, with future projections.{' '}
      <H.FB pageNumber={367}>
        エボラの緊急性を 伝えるためにギャップマインダーがつくった配布物は
        <H.A href="https://gapm.io/vebol">こちら</H.A>。
      </H.FB>
      The material Gapminder produced to try to communicate the urgency of the
      situation is at ww.gapm.io/vebol. Watch the epidemic explained in
      <H.A href="http://gapm.io/fp16">Hans Rosling's Factpod #6</H.A> and
      <H.A href="http://gapm.io/fp17">#8</H.A> on YouTube.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.gapm.io/xeboresp">
          WHO[3] WHO Ebola Response Team "Ebola Virus Disease in West
          Africa---The First 9 Months of the Epidemic and Forward
          Projections." New England Journal of Medicine 371 (October 6,
          2014): 1481--95.
        </H.A>
        DOI: 10.1056/NEJMoa1411100
      </li>
    </ul>
  </>
)
