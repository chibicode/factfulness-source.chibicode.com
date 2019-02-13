import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={367}>人口予測は国連によるもの(UN-Pop[1,2,5])。</H.FB>{' '}
      see below for the UN Population data. Like forecasting the weather, it is
      almost impossible to perfectly predict the future population.{' '}
      <H.FB pageNumber={366}>
        国連人口部の人口学専門家は何十年もの間、人口をかなり正確に予測してきた。コンピューターによる予測が使えなかった時代でも、予測の精度は高かった。未来の子供の数の予測は、過去4回の報告書のすべてで「約20億人」とされている。正確に言うと、2017年の子供の数は19億5000万人で、2100年の子供の数は19億7000万人だ。
      </H.FB>
    </p>
    <p>
      <H.A href="http://www.gapm.io/xbonpop">
        The Accuracy of Past Projections
      </H.A>
      is a study from Bongaarts and Bulato (2000) that measure past projections,
      and find that the average error of UN world population forecasts are
      modest, at 2.8%, for an average length of projection of 17 years (see, for
      example, p. 50). Also Keilman (2010) studied the quality of UN population
      projections, and analyzed forecasts prepared by the UN between 1950 to
      1993. For a video of Hans Rosling comparing these historic forecast based
      on Keilman's study, see:
      <H.A href="http://www.gapm.io/mmpopfut">
        How Reliable is the World Population Forecast?
      </H.A>
      The projections are available at the
      <H.A href="http://www.esa.un.org/unpd/wpp">UN website</H.A>, as well as
      the
      <H.A href="about:blank">
        uncertainty intervals of their medium forecasts
      </H.A>
      .
    </p>

    <H.SmallHeading>国連の人口データ</H.SmallHeading>

    <ul>
      <li>
        UN-Pop[1] UN Population Division. World Population Prospects 2017.
        United Nations, Department of Economic and Social Affairs.
        <ul>
          <li>
            <H.A href="https://esa.un.org/unpd/wpp">
              Population indicator: Medium fertility variant. 1950--2100.
            </H.A>{' '}
            (WPP2017_POP_F01_1_TOTAL_POPULATION_BOTH_SEXES.xlsx)
          </li>
        </ul>
      </li>
      <li>
        UN-Pop[2] UN Population Division. World Population Prospects 2017
        <ul>
          <li>
            <H.A href="https://esa.un.org/unpd/wpp">
              Annual age composition of world population, medium fertility
              variant.
            </H.A>{' '}
            (WPP2017_INT_F03_1_POPULATION_BY_AGE_ANNUAL_BOTH_SEXES.xlsx)
          </li>
        </ul>
      </li>
      <li>
        UN-Pop[5] UN Population Division. World Population Prospects 2017
        <ul>
          <li>
            <H.A href="http://www.gapm.io/xpopproj">
              World Population Probabilistic Projections.
            </H.A>
          </li>
          <li>2017/11/29閲覧。</li>
        </ul>
      </li>
    </ul>

    <H.SmallHeading>その他の出典</H.SmallHeading>
    <ul>
      <li>
        <H.A href="http://www.gapm.io/xbonpop">
          Bongaarts and Bulato (2000) Beyond Six Billion: Forecasting the
          World's Population(2000) &quot;Chapter 4: The Accuracy of Past
          Projections.&quot; 37--52.
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xpaccur">
          Keilman (2010) Keilman, Nico. &quot;Data quality and accuracy of
          United Nations population projections, 1950--95.&quot; Population
          Studies 55, no. 2 (2010): 149--64. 2010/12/9更新。
        </H.A>
        . DOI: 10.1080/00324720127686
      </li>
    </ul>
  </>
)
