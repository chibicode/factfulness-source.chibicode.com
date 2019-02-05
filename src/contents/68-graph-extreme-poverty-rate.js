import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The levels of extreme poverty historically can not be known exactly.
      Adjusting for changes in prices, currencies, food, employment and
      technology is very difficult. In Factfulness we use numbers from 
      <a href="http://gapm.io/depov">Gapminder[9]</a>. The numbers before 1980
      are based on two sources. First: Bourguignon and Morrisson (2002) estimate
      that in 1820, the share of people below $2 per day (in constant 1985 PPP
      dollars) was 94.4 percent, and the share of people below $1 per day was
      83.9 percent. To express this in 2011 PPP dollar prices is not trivial.
      The 
      <a href="https://ourworldindata.org/grapher/declining-global-poverty-share-1820-2015">
        two alternative rates from
      </a>
       Bourguignon and Morrisson, Max Roser at 
      <a href="https://ourworldindata.org/extreme-poverty">OurWorldInData[1]</a>
       use the higher estimate when showing a 
      <a href="https://ourworldindata.org/grapher/world-population-in-extreme-poverty-absolute">
        single line for the global trend of extreme poverty rate
      </a>
      ; Max Roser uses the higher estimate, while we have decided to go for a
      lower estimate. This is because the second source, van Zanden[1],
      indicates a lower rate. The paper World Income Inequality 1820-2000 uses
      historic GDP per capita from Maddison[1] to estimate what income levels
      people lived on. For the distribution of incomes within countries they use
      historic records of the differences in heights of people (such as military
      data archives). Insufficient food during childhood stops growth and leads
      to a shorter adult person. By estimating the childhood stunting they can
      guess the share of people missing food, hence living in extreme poverty.
      Based on those estimations they assess that 73 percent of people lived
      below $2 per day, and 39 percent below $1 per day (in constant 1990 PPP
      dollars). But they couldn't construct height and GDP data for all
      countries and roughly 25% of humanity are missing from this estimate. The
      share missing were probably mostly the poorest, who didn't even have
      organized military archives, hence we can add them to the extremely poor,
      and get 82 percent of humanity in extreme poverty in 1820. We then pull
      this number back 20 years and assume even more people were poor in 1800.
      We land on 85 percent on Level 1 at the start of the trend in 1800. After
      1980 the data comes from PovcalNet and is described in the note to Fact
      Question 3. The official World Bank estimate of extreme poverty in year
      2013 is 10.7 percent which <a href="http://gapm.io/depov">Gapminder[9]</a>
       has extended to 2017, by assuming income distributions being constant and
      IMF[1] GDP per capita forecasts are applicable on household incomes form
      PovcalNet.
    </p>
    <H.SmallHeading>出典</H.SmallHeading>
    <ul>
      <li>
        <a href="https://www.ourworldindata.org/extreme-poverty">
          OurWorldInData[1] Roser, Max, and Esteban Ortiz-Ospina.
          &quot;Declining global poverty: share of people living in extreme
          poverty, 1820--2015, Global Extreme Poverty.&quot; 2017/11/20閲覧。
        </a>
      </li>
    </ul>
  </>
)
