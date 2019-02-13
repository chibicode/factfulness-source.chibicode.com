import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Each circle, or bubble, represents a country. The area of the circle is
      proportional to the population of the country, using data from
      <H.A href="https://esa.un.org/unpd/wpp">UN-POP[1]</H.A>. On the x-axis is
      the total fertility rate, using data from
      <H.A href="https://esa.un.org/unpd/wpp">UN-POP[3]</H.A>. The scale is
      reversed putting large families to the left and small to the right. This
      is to show progress as a movement from left to right, which is more
      intuitive. The y-axis shows the child survival rate in percent. These
      numbers are more commonly expressed as the indicator child mortality rate
      in deaths before 5 years of age per 1,000 live births. Instead of deaths
      per thousand we changed the rate to percent (deaths per 100) because it is
      more broadly understood, and we also show survival instead of mortality so
      that the positive direction is upward, which intuitively is more positive.
      Data comes from <H.A href="http://www.childmortality.org/">UN-IGME</H.A>.
    </p>
    <p>
      The two boxes are not showing any official thresholds. They are there to
      visually emphasize the divided world that existed in 1965, in which 125
      countries with 68 percent of the world's population were in the
      &quot;developing&quot; box. Only 44 countries, with 30 percent of the
      world's population, were in the &quot;developed&quot; box. An interactive
      version of the chart will soon be freely available at
      <H.A href="http://www.gapm.io/voutdwv">www.gapm.io/voutdwv</H.A>.
    </p>
  </>
)
