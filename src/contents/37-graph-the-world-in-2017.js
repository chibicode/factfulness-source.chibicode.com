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
      reversed, putting large families to the left and small to the right. This
      is to show progress as a movement from left to right, which is more
      intuitive. The y-axis shows the child survival rate in percent. These
      numbers are more commonly expressed as the child mortality rate in deaths
      before 5 years of age, per 1,000 live births. We changed the rate to
      percent, because it is more broadly understood, and we also show survival
      instead of mortality so that the positive direction is upward, which
      intuitively is more positive. The
      <H.A href="http://www.childmortality.org/">UN-IGME data</H.A> for the
      child mortality rate ends in 2016.
      <H.A href="http://gapm.io/du5mr">Gapminder[6] </H.A>extended the series by
      using the percentage change expected by UN WPP 2017 medium fertility
      variant from
      <H.A href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
        World Population Prospects 2017
      </H.A>
      .
    </p>
    <p>
      The two boxes are not showing any official thresholds. They are there for
      comparison with the world in 1965. In 2017, only 13 countries with 6.4
      percent of the world population are still in the "developing"
      box. Those are as follows: Angola, Burkina Faso, Burundi, Chad, DR Congo,
      East Timor, Gambia, Mali, Mozambique, Niger, Nigeria, Somalia and Uganda.
      37 countries with 8.4% of the world population are between the boxes. 134
      countries are in the "developed" box. For an interactive version
      of the chart, see <H.A href="http://gapm.io/voutdwv">gapm.io/voutdwv</H.A>
      .
    </p>
  </>
)
