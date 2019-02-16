import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Gapminder polled the public, asking the question with an open-answer field
      so respondents were not limited by our three predefined alternatives. In
      the US, 61 percent of respondents entered a value above 50 percent,
      guessing that a majority of people live in low-income countries. The
      average guesses were 57 percent in the US and 61 percent in Sweden, see
      <H.A href="http://gapm.io/pollnov17bnovus-17b">Novus[3]</H.A>. Gapminder
      also asked the same question but with "low-income countries" replaced by
      "developing countries". The results were the same, as if the terms were
      synonyms.
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xpopage">
            UN-Pop[4] "Annual population by age---Female, medium fertility
            variant,"
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xwb177">
            World Bank[7] "Life expectancy at birth, total (years)." United
            Nations Statistical Division. Population and Vital Statistics
            Reports (various years). 2017/11/8閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xwb178">
            World Bank[8] "Improved water source (% of population with access)."
            WHO/UNICEF Joint Monitoring Programme (JMP) for Water Supply and
            Sanitation. 2017/11/8閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xwb179">
            World Bank[9] "Immunization, measles (% of population with access)."
            2017/11/8閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xwb1710">
            World Bank[10] "Prevalence of undernourishment (% of population)."
            Food and Agriculture Organisation. 2017/11/8閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
