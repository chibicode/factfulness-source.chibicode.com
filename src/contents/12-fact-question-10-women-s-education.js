import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={10} />

    <p>
      <H.FB pageNumber={371}>
        正解はA。保健指標評価研究所が188カ国を対象に行った調査によれば(
        <H.A href="http://www.healthdata.org/node/3680">IHME[2]</H.A>
        )、世界中の25歳から34歳の女性は平均9.09年の学校教育を受けている。男性は10.21年。また、2010年に146カ国を対象にした別の調査によると、25歳から29歳の女性は平均8.79年の学校教育を受け、男性は9.32年の学校教育を受けている(
        <H.A href="http://www.barrolee.com/">Barro and Lee (2013)</H.A>)。
      </H.FB>
    </p>

    <p>
      As always, there is uncertainty in these kinds of estimates, but there is
      no reason to assume that the difference between genders is nearly as large
      as what people think. Gapminder first asked this question with an open
      answer field to see how responses were distributed, before deciding on
      three exact values for alternatives A, B and C, in order to make the
      skewed perception easier to compare to random results.
    </p>
  </>
)
