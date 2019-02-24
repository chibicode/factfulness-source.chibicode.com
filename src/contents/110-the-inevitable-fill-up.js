import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      ここで紹介している、直感に反する現象は人口学で言う「人口モメンタム(慣性)」だ。出生率が低下してから、人口が止まるまでは一定の時間がかかる。本書では「人口モメンタム」を分かりやすく解説するため、世代ごとの人口だけを比べるようにしている。
    </p>
    <p>
      未来の人口は出生率、死亡率、そして慣性によって決まる。人口を予測するために、人口学者はさまざまなシナリオを考える。たとえば出生率が人口置換水準だったり、死亡率が一定だと仮定し、他の要素を変えることで、どのような差が出るかを見たりする。
    </p>
    <p>
      <H.FB pageNumber={366}>
        文字と図による説明だけでは、これから人口がどう変化す
        るかはわかりづらいかもしれない。アニメーションを使ったり、模型を使って説明するほ
        うがわかりやすいと思うので、
        <H.A href="https://gapm.io/vidfu">こちらをご覧になってほしい</H.A>
        。専門的な説明はUN-Pop[6, 7]を参考に。
      </H.FB>
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xpopfut2">
            UN-Pop[7] Andreev, K., V. Kantorová, and J. Bongaarts. "Demographic
            components of future population growth." Technical paper no. 2013/3.
            United Nations DESA Population Division, 2013.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
