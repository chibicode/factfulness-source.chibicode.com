import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Putting countries into two groups as being a "democracy" or not
      is highly problematic. We use Max Roser's data as compiled at
      <H.A href="https://ourworldindata.org/democracy">OurWorldInData[4]</H.A>.
      Roser has adopted the definitions of the
      <H.A href="http://www.systemicpeace.org/polity/polity4.htm">
        Polity IV dataset
      </H.A>
      but give the numbers in terms of inhabitants, not number of countries. The
      Polity IV dataset puts countries on a democracy scale, and defines
      non-democratic regimes as autocracies (e.g. China), closed anocracy (e.g.
      Morocco), open anocracy (e.g. Russia) or colonial regimes. In this graph,
      we only show democracies, hence disregarding all types of non-democratic
      regimes. For an alternate detailed list of development of democracy, see
      Mathew White's
      <H.A href="http://www.bookofhorriblethings.com/historyofdemocracy/History-of-Democracy-APX-list.html">
        "Chronological List of Democracies"
      </H.A>
      .
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="https://www.ourworldindata.org/democracy">
          OurWorldInData[4] Roser, Max. "Share of World Population Living
          in Democracies." 2017/11/26閲覧。
        </H.A>
      </li>
    </ul>
  </>
)
