import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Each circle, or bubble, represents a country. The area of the circle is
      proportional to the population of the country, using data from 
      <a href="https://esa.un.org/unpd/wpp">UN-POP[1]</a>. On the x-axis is the
      total fertility rate, using data from 
      <a href="https://esa.un.org/unpd/wpp">UN-POP[3]</a>. The scale is
      reversed, putting large families to the left and small to the right. This
      is to show progress as a movement from left to right, which is more
      intuitive. The y-axis shows the child survival rate in percent. These
      numbers are more commonly expressed as the child mortality rate in deaths
      before 5 years of age, per 1,000 live births. We changed the rate to
      percent, because it is more broadly understood, and we also show survival
      instead of mortality so that the positive direction is upward, which
      intuitively is more positive. The 
      <a href="http://www.childmortality.org/">UN-IGME data</a> for the child
      mortality rate ends in 2016. 
      <a href="http://gapm.io/du5mr">Gapminder[6] </a>extended the series by
      using the percentage change expected by UN WPP 2017 medium fertility
      variant from 
      <a href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
        World Population Prospects 2017
      </a>
      .
    </p>
    <p>
      The two boxes are not showing any official thresholds. They are there for
      comparison with the world in 1965. In 2017, only 13 countries with 6.4
      percent of the world population are still in the &quot;developing&quot;
      box. Those are as follows: Angola, Burkina Faso, Burundi, Chad, DR Congo,
      East Timor, Gambia, Mali, Mozambique, Niger, Nigeria, Somalia and Uganda.
      37 countries with 8.4% of the world population are between the boxes. 134
      countries are in the &quot;developed&quot; box. For an interactive version
      of the chart, see <a href="http://gapm.io/voutdwv">gapm.io/voutdwv</a>.
    </p>
  </>
)
