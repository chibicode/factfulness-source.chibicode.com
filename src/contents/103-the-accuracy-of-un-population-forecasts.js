import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      UN Population forecasts are based on UN-Pop[1,2,5]; see below for the UN
      Population data. Like forecasting the weather, it is almost impossible to
      perfectly predict the future population. But the demography experts at the
      UN Population Division have been very accurate in their forecasts for many
      decades, even before modern computer modeling was possible. Their
      forecasts of the future number of children have stayed the same in the
      past four revisions of the publication. The official UN projection is
      alternative C. 2 billion children is a rounded number. The precise UN
      numbers are 1.95 billion as of 2017 and 1.97 billion for 2100.
    </p>
    <p>
      <a href="http://www.gapm.io/xbonpop">The Accuracy of Past Projections</a>
       is a study from Bongaarts and Bulato (2000) that measure past
      projections, and find that the average error of UN world population
      forecasts are modest, at 2.8%, for an average length of projection of 17
      years (see, for example, p. 50). Also Keilman (2001) studied the quality
      of UN population projections, and analyzed forecasts prepared by the UN
      between 1950 to 1993. For a video of Hans Rosling comparing these historic
      forecast based on Keilman's study, see: 
      <a href="http://www.gapm.io/mmpopfut">
        How Reliable is the World Population Forecast?
      </a>
       The projections are available at the 
      <a href="http://www.esa.un.org/unpd/wpp">UN website</a>, as well as the 
      <a href="about:blank">uncertainty intervals of their medium forecasts</a>.
    </p>

    <H.SmallHeading>国連の人口データ</H.SmallHeading>

    <ul>
      <li>
        UN-Pop[1] UN Population Division. World Population Prospects 2017.
        United Nations, Department of Economic and Social Affairs.
        <ul>
          <li>
            <a href="https://esa.un.org/unpd/wpp">
              Population indicator: Medium fertility variant. 1950--2100.
            </a>{' '}
            (WPP2017_POP_F01_1_TOTAL_POPULATION_BOTH_SEXES.xlsx)
          </li>
        </ul>
      </li>
      <li>
        UN-Pop[2] UN Population Division. World Population Prospects 2017
        <ul>
          <li>
            <a href="https://esa.un.org/unpd/wpp">
              Annual age composition of world population, medium fertility
              variant.
            </a>{' '}
            (WPP2017_INT_F03_1_POPULATION_BY_AGE_ANNUAL_BOTH_SEXES.xlsx)
          </li>
        </ul>
      </li>
      <li>
        UN-Pop[5] UN Population Division. World Population Prospects 2017
        <ul>
          <li>
            <a href="http://www.gapm.io/xpopproj">
              World Population Probabilistic Projections.
            </a>
          </li>
          <li>2017/11/29閲覧。</li>
        </ul>
      </li>
    </ul>

    <H.SmallHeading>その他の出典</H.SmallHeading>
    <ul>
      <li>
        <a href="http://www.gapm.io/xbonpop">
          Bongaarts and Bulato (2000) Beyond Six Billion: Forecasting the
          World's Population(2000) &quot;Chapter 4: The Accuracy of Past
          Projections.&quot; 37--52.
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xpaccur">
          Keilman (2001) Keilman, Nico. &quot;Data quality and accuracy of
          United Nations population projections, 1950--95.&quot; Population
          Studies 55, no. 2 (2001): 149--64. 2010/12/9更新。
        </a>
        . DOI: 10.1080/00324720127686
      </li>
    </ul>
  </>
)
