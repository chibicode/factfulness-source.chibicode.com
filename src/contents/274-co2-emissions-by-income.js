import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={358}>
        人口の変化に合わせて各国の二酸化炭素排出量の割り当てをどう調整したらいいかについて、研究者たちは答えを出そうと努力している。参考論文はこちら:
        Shengmin et al. (2011)、Raupach et al. (2014).
        <H.A href="gapm.io/eco2a">詳しくはこちら</H.A>
      </H.FB>
    </p>
    <p>
      On Level 4, transportation is behind one third of all CO2
      emissions---which also double with income, based on
      <H.A href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions">
        US EPA data
      </H.A>
      (27 percent for the US). See
      <H.A href="https://data.ess-dive.lbl.gov/#view/ess-dive-ba81a8a8e0bef31-20180330T223152179">
        Global, Regional, and National Fossil-Fuel CO2 Emissions
      </H.A>
      .
    </p>
  </>
)
