import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={370}>
        1995年の講義で使った乳幼児死亡率はユニセフによるもの(UNICEF[1])。本書では当初よりも新しい2017年のデータを使っている(
        <H.A href="http://www.childmortality.org/">UN-IGME</H.A>)
      </H.FB>
      ---a data collaboration between UNICEF, WHO, UN Population Division and
      the World Bank. The numbers used in the evening lecture back in 1995 were
      only slightly different: Saudi Arabia in 1960 was 292 and in 1993, 38;
      Malaysia in 1960 was 105 and in 1993, 17; Brazil in 1960 was 181 and in
      1993, 63; Tanzania in 1960 was 249 and in 1993, 16.
    </p>
    <p>
      The data from UNICEF[1] is based on The State of the World's Children
      1995, published by Oxford U P, available to download as
      <H.A href="https://www.unicef.org/about/history/files/sowc_1995.pdf">
        PDF here
      </H.A>
      . Data for 2017 is derived from &quot;Child Mortality Estimates&quot; from{' '}
      <H.A href="http://www.childmortality.org/">www.childmortality.org</H.A>.
      UN-IGME---United Nations Inter-agency Group for Child Mortality
      Estimation---is a data collaboration between UNICEF, WHO, UN Population
      Division and the World Bank.
    </p>
  </>
)
