import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The trend shows ten-year averages from 
      <a href="http://gapm.io/itfr">Gapminder[6]</a> that ends with data from
      UN-IGME, published in 2017 for the period 1990--2016. Estimates before
      1990 come from hundreds of historical sources, primarily 
      <a href="http://www.mortality.org/">www.mortality.org</a> and Mitchell's
      books. They have been compiled into one coherent trend line. In summary:
    </p>
    <ul>
      <li>
        1800--1950. Gapminder's historic estimates were compiled and documented
        by Mattias Lindgren, mainly from the Child Mortality Estimates database;
        see <a href="http://www.mortality.org/">www.mortality.org</a>. The
        historic estimates of infant mortality rate come from Brian R.
        Mitchell's volume 
        <a href="https://www.google.se/search?tbm=bks&amp;hl=en&amp;q=International+Historical+Statistics+mitchell">
          International Historical Statistics
        </a>
        , which were converted to child mortality through regression. For
        detailed documentation on the data and sources, see Version 7 at the
        bottom of the page at 
        <a href="http://www.gapm.io/du5mr.">www.gapm.io/du5mr</a>.
      </li>
      <li>
        1950--2016. UN-IGME is a data collaboration project between UNICEF, WHO,
        UN Population Division and the World Bank. They released new estimates
        of child mortality for countries and a global estimate on October 17,
        2017, which is available at 
        <a href="http://www.childmortality.org/">www.childmortality.org</a>. In
        this dataset almost all countries have estimates between 1970 and 2016,
        while roughly half the countries also reach back to 1950.
      </li>
      <li>
        1950--2017. UN-Pop[1], 
        <a href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
          World Population Prospects 2017
        </a>
        , provides annual data of the child mortality rate for all countries in
        the interpolated demographic indicators. 
        <a href="https://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/5_Interpolated/WPP2017_INT_F01_ANNUAL_DEMOGRAPHIC_INDICATORS.xlsx">
          The data is available for download.
        </a>
      </li>
    </ul>
    <p>
      Our county estimates are based on these sources, and our global trend for
      child mortality rate is using the UN-IGME data for the period 1970 to
      2016. All other years is a weighted mean of countries data. The proper way
      to calculate the global child mortality, would require estimating the
      total number of child births and child deaths each year. But we don't have
      good estimates of the number of births, so instead we have used a proxy:
      the fertility rate multiplied by population. This method gets us very
      close to the properly calculated UN-IGME numbers. For 1990, UN-IGME has
      93.4, and our weighted average is 96.6. We have linked our weighted
      average for the world, to the UN-IGME series, by using the rate of change
      before 1990, and apply that backwards in time, so the whole series is
      moved down to meet UN-IGME in 1990. See 
      <a href="http://www.gapm.io/du5mr">www.gapm.io/du5mr</a> for detailed
      documentation.
    </p>
  </>
)
