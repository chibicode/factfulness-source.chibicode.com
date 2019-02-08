import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The numbers are rounded to billion people to make it easier to remember.
      Incomes are in price adjusted PPP 2011 dollars by ICP.
      <a href="http://gapm.io/incm">Gapminder[8]</a> estimates that the number
      of people on each income level in 2017 are as follows:
    </p>
    <ul>
      <li>Level 1 has 0.75 billion people living on less than $2 per day</li>
      <li>
        Level 2 has 3.3 billion people living on incomes between $2 to $8 per
        day
      </li>
      <li>Level 3 has 2.5 billion people living on $8 to $32 per day</li>
      <li>Level 4 has 0.9 billion people living on more than $32 per day</li>
    </ul>
    <p>
      The detailed estimates are based on the World Bank's PovcalNet for 2013
      and forecasts from <a href="http://gapm.io/ximfw">IMF[1]</a>.
      <a href="http://iresearch.worldbank.org/PovcalNet">Povcal[1]</a> is the
      dataset that the World Bank uses to estimate the official rate of extreme
      poverty worldwide. Data was collected through household income surveys
      from across the world. National currencies are converted to comparable
      dollars adjusted for differences between countries in cost of living. The
      threshold of $2 per day is almost identical to the World Bank's $1.9 per
      day. Gapminder rounded that up to $2 per day to make it easier to
      remember, and to avoid the false precision in poverty estimates that are
      very rough.
    </p>
  </>
)
