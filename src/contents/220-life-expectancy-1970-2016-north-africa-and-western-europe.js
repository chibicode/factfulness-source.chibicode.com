import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      In the book we say that life expectancy in Africa today is 65 years.
      Estimates from UN says the number for Africa is 66 years. IHME don't
      present an aggregate for Africa, so Gapminder estimated the average
      lifespan to be 65.5 for 2017, weighted by population, using select GBD
      tables published in
      <H.A href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)31833-0/fulltext">
        Lancet article 2017
      </H.A>
      , available to download via{' '}
      <H.A href="http://www.gapm.io/xihlex">IHME</H.A>. Since population weight
      seems to slightly increase life expectancy, Gapminder rounded it
      downwards, to 65 years. Total Europe (as used in the rest of the book) has
      78 years life expectancy, while Western Europe (or EU) has 82. So this
      comparison is assuming we use EU or Western Europe.
    </p>
    <p>
      In 1970, the average lifespan in Sweden was 74.5 years. In their estimates
      for 2016, IHME combines North Africa with the Middle East, including
      Afghanistan, and puts life expectancy to 73.16 years, while
      <H.A href="http://www.esa.un.org/unpd/wpp">UN-Pop[1]</H.A> estimates 71.8
      years. To compare historical rates in Sweden with North Africa today, we
      used data from IHME, GBD (2016). Sweden in 1967 and 1970 had 74.5 years
      and 75.9 years in 1980, with the weighted average of 74.2 years. The five
      countries in North Africa with life expectancies above the world average
      of 72 years are as follow:
    </p>
    <ul>
      <li>Algeria, 77.4 years</li>
      <li>Egypt, 72.1 years</li>
      <li>Libya, 75.05 years</li>
      <li>Morocco, 75 years</li>
      <li>Tunisia, 77.46 years</li>
    </ul>
    <p>
      The five countries have lower Income than Sweden used to have, as you can
      see in the interactive graph:
      <H.A href="https://bit.ly/2IxvIAI">http://bit.ly/2IxvIAI</H.A>
    </p>
    <p>
      <img src="/static/images/sources/sweden-north-africa.jpg" alt="" />
    </p>
    <p>
      To estimate the average lifespan for the countries and regions mentioned
      above, we looked at GBD, the table showing life expectancy every five
      years from 1970 to 2016. For sub-Saharan Africa, life expectancy is 62.87
      according to IHME, while UN estimates 59.7. IHME numbers are generally
      higher. The reasons why are
      <H.A href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)31833-0/fulltext">
        explained by Lancet
      </H.A>
      . See <H.A href="http://gapm.io/ilex">Gapminder[4]</H.A> for detailed
      documentation on life expectancy for countries and regions.
    </p>
  </>
)
