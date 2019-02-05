import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The data is from <a href="http://gapm.io/xeboresp">WHO[3]</a>, the Ebola
      Response Team's research article evaluating the first 9 months of the
      outbreak, with future projections. The material Gapminder produced to try
      to communicate the urgency of the situation is at ww.gapm.io/vebol. Watch
      the epidemic explained in 
      <a href="http://gapm.io/fp16">Hans Rosling's Factpod #6</a> and 
      <a href="http://gapm.io/fp17">#8</a> on YouTube.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xeboresp">
          WHO[3] WHO Ebola Response Team &quot;Ebola Virus Disease in West
          Africa---The First 9 Months of the Epidemic and Forward
          Projections.&quot; New England Journal of Medicine 371 (October 6,
          2014): 1481--95.
        </a>
         DOI: 10.1056/NEJMoa1411100
      </li>
    </ul>
  </>
)
