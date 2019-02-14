import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The chart on the pastedown at the end of the book shows people by region
      and income. The maps show the&nbsp;
      <a href="https://esa.un.org/unpd/wpp">UN-POP[1]</a>&nbsp;population
      numbers from the medium fertility variant of the World Population Prospect
      2017, rounded to full billions by&nbsp;
      <a href="http://gapm.io/elev">Gapminder[3]</a>. Household per capita are
      in PPP 2011 $/day using PPP from&nbsp;
      <a href="http://www.gapm.io/x-icpp">ICP[1]</a>. Income and gini data for
      2013 comes from&nbsp;
      <a href="http://iresearch.worldbank.org/PovcalNet">PovCal</a>, extended to
      2017 and 2040 by Gapminder, with a method similar to what&nbsp;
      <a href="http://gapm.io/xpiie17">Hellebrandt and Mauro[1]</a>
      &nbsp;describe in &ldquo;The Future of Worldwide Income
      Distribution&rdquo; from April 2015. Using&nbsp;
      <a href="http://gapm.io/ximfw">IMF[1]</a>&nbsp;forecasts extended by&nbsp;
      <a href="http://gapm.io/incm">Gapminder[8]</a>&nbsp;all the way to 2040.
    </p>
    <p>
      The log normal distributions were calculated with the method provided by
      Bas van Leeuwen, as used in the van Zanden[1] paper &ldquo;World Income
      Inequality 1820-2000&rdquo;. Gapminder adjusted the assumption about log
      normal distribution and instead distributed people along a different shape
      that matches the PovCal survey based distributions much better.
    </p>
    <p>
      The forecasted populations in different regions on different income levels
      in 2017 and 2040 are described in more detail here. Gapminder[12], see
      Income Mountains v. See Gapminder[12]. Read more here:&nbsp;
      <a href="https://www.gapminder.org/sources/income-mountains">
        www.gapminder.org/sources/income-mountains
      </a>
      .
    </p>
    <ul>
      <li>
        <strong>PovcalNet</strong>&nbsp;&ldquo;An Online Analysis Tool for
        Global Poverty Monitoring.&rdquo; Founded by Martin Ravallion, at the
        World Bank. Accessed November 30, 2017.&nbsp;
        <a href="http://iresearch.worldbank.org/PovcalNet">
          http://iresearch.worldbank.org/PovcalNet
        </a>
        .
      </li>
    </ul>
  </>
)
