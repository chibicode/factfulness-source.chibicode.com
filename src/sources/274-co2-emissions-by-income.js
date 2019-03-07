import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={358}>
        人口の変化に合わせて各国の二酸化炭素排出量の割り当てをどう調整したらいいかについて、研究者たちは答えを出そうと努力している。参考論文はこちら:
        Shengmin et al. (2011)、Raupach et al. (2014)
      </H.FB>
    </p>
    <p>
      レベル4の国々では、全二酸化炭素排出量の3分の1は交通手段からきている(アメリカだと27%)。
      また、
      <H.A href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions">
        アメリカ合衆国環境保護庁
      </H.A>
      によると、二酸化炭素排出量は所得とともに倍増する。ちなみに、全世界・地域ごと・国ごとの排出量データは
      <H.A href="https://data.ess-dive.lbl.gov/#view/ess-dive-ba81a8a8e0bef31-20180330T223152179">
        こちら
      </H.A>
      から見れる。
    </p>
    <p>
      さらに詳しくは
      <H.A href="gapm.io/eco2a">こちら</H.A>をご覧になってほしい。
    </p>
  </>
)
