import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The graphs showing people distributed by income, comparing Mexico and the
      United States in 2016, are based on the same data as the four income
      levels, slightly adjusted to align with the shape of the distributions
      from the latest available national income surveys.
    </p>
    <p>
      The number of people on different incomes are based on latest available
      income distribution data from the World Bank's
      <H.A href="http://iresearch.worldbank.org/PovcalNet">Povcal[1]</H.A>,
      which was extended to 2013 by Gapminder[10] using the indicator Household
      per capita income and converted into constant international dollars (PPP
      2011), on a logarithmic scale. By adjusting the exchange rates to consider
      price differences with PPP, the incomes are more comparable across
      countries. The shapes of the curves were adjusted to better follow the
      distributions, as reported by the latest available national income survey
      for each country; see ENIGH for Mexico, and US-CPS for the United States.
    </p>
    <p>
      The right chart uses a doubling scale for income, just like all other
      charts displaying income the book. This image shows what the shapes would
      look like if they were drawn on a linear scale. For more details see:
      <H.A href="http://gapm.io/fbincmlinlog">gapm.io/fbincmlinlog</H.A>
    </p>
    <p>
      <img src="/static/images/sources/us-mexico-linear-graph.jpg" alt="" />
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.beta.inegi.org.mx/proyectos/enchogares/regulares/enigh/nc/2016">
          ENIGH (Encuesta Nacional de Ingresos y Gastos de los Hogares) 2016.
          Tabulados básicos 2017: Table 2.3.
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xuscps17">
          US-CPS (US Census Bureau) Current Population Survey (CPS) 2017: Family
          Income in 2016. Table: FINC0_01.
        </H.A>
      </li>
      <li>
        <H.A href="http://iresearch.worldbank.org/PovcalNet">
          PovcalNet "An Online Analysis Tool for Global Poverty Monitoring."
          Founded by Martin Ravallion, at the World Bank. 2017/11/30閲覧。
        </H.A>
      </li>
    </ul>
  </>
)
