import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      On Level 4, the number of new book titles published each year is roughly 1
      per 1000 citizens. That is roughly five times higher than the average on
      Level 3, based on
      <H.A href="https://en.wikipedia.org/wiki/Books_published_per_country_per_year#cite_note-publishingtechnology.com-2">
        Wikipedia[1]
      </H.A>
      divided by UN-POP[1].
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.gapm.io/x-icpp">
          ICP[1] (International Comparison Program) &quot;Purchasing Power
          Parity $ 2011.&quot;
        </H.A>
      </li>
    </ul>
  </>
)
