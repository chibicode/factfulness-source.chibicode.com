import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      アフリカのヨーロッパの進歩の速度を比べてみると、インフラ面では、アフリカは他の国と同じ速度で発展するだろうと言える。
    </p>
    <ul>
      <li>
        電気
        <ul>
          <li>
            <H.A href="https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=ZG">
              サハラ以南アフリカ: 1991 → 2014: 19 → 37%
            </H.A>
          </li>
          <li>
            <H.A href="https://ourworldindata.org/grapher/primary-enrollment-selected-countries">
              ヨーロッパやイギリス: 1865 → 1880: 24.4 → 77%
            </H.A>
          </li>
        </ul>
      </li>
      <li>
        教育
        <ul>
          <li>
            <H.A href="https://data.worldbank.org/indicator/SE.PRM.CMPT.ZS?locations=ZG">
              サハラ以南アフリカ: 1971 → 2014: 46 → 68%
            </H.A>
          </li>
        </ul>
      </li>
      <li>
        下水
        <ul>
          <li>
            <H.A href="https://data.worldbank.org/indicator/SH.STA.ACSN?locations=ZG">
              サハラ以南アフリカ: 1990 → 2015: 23 → 29%
            </H.A>
          </li>
        </ul>
      </li>
      <li>
        上水
        <ul>
          <li>
            <H.A href="https://data.worldbank.org/indicator/SH.H2O.SAFE.ZS?locations=ZG">
              サハラ以南アフリカ: 1990 → 2015: 46 → 67%
            </H.A>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      最貧困層への電気へのアクセスを広げることの難しさと、過去の事例についてはこちらの記事に詳しく書かれている:{' '}
      <H.A href="https://thebreakthrough.org/index.php/voices/roger-pielke-jr/electricity-for-all">
        Electricity for All: What Universal Energy Access Will Take
      </H.A>
      .
    </p>
  </>
)
