import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={7} />
    <H.P>
      <H.FB pageNumber={371}>
        正解はC。国際災害データベースによれば、自然災害による年間死者数は過去100年間で75%減少した(
        <H.A href="http://www.emdat.be/">EM-DAT</H.A>
        )。自然災害は年によってばらつきがあるので、それぞれの年ごとに過去10年間の平均を比べている。
      </H.FB>{' '}
      これについて詳しく書かれている第4章では、過去25年間の平均も使っている。
      <H.FB pageNumber={371}>
        過去10年間に(2007年から2016年)、毎年平均8万386人が自然災害で亡くなった。1100年前(1907年から1916年)の32万5742人と比べると、25%になっている。
      </H.FB>
    </H.P>
    <p>
      The huge decline in disaster deaths would be even more striking if two
      other major global changes were also taken into account. First, the number
      of people has increased by four, which calls for counting disaster deaths
      per capita. 1907--1916, there were 181 disaster deaths per million people.
      2007--2016, the number was 11. The relative number has dropped to 6
      percent of what it was 100 years ago. Second, 100 years ago the
      communication technologies for reporting disasters were very primitive,
      compared to the monitoring of today, which means that many catastrophes
      must have gone unrecorded or been underreported.
    </p>
    <p>
      The EM-DAT includes death toll estimates for 8,969 disasters recorded
      worldwide since 1900. All known emergency events have been categorized as
      follows: Animal accident, Complex disasters, Drought, Earthquake,
      Epidemic, Extreme temperature, Flood, Fog, Impact, Insect infestation,
      Landslide, Mass movement (dry), Storm, Volcanic activity, Wildfire. See
      <a href="http://www.gapm.io/q7">www.gapm.io/q7</a>.
    </p>
    <H.SmallHeading>出典</H.SmallHeading>- [EM-DAT Centre for Research on the
    Epidemiology of Disasters (CRED). The International Disaster Database.
    Debarati Guha-Sapir, Université catholique de Louvain.
    2017/11/5閲覧。](http://www.emdat.be/)
    <H.P>
      <H.FB pageNumber={371}>
        正解はC。国際災害データベースによれば、自然災害による年間死者数は過去100年間で75%減少した(
        <H.A href="http://www.emdat.be/">EM-DAT</H.A>
        )。自然災害は年によってばらつきがあるので、それぞれの年ごとに過去10年間の平均を比べている。
      </H.FB>
    </H.P>
  </>
)
