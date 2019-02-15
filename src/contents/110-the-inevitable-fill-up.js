import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      This counterintuitive phenomena is what population experts usually refer
      to as the demographic momentum, a term used to describe the delayed
      stopping of population increase. The fill-up effect is almost identical to
      the demographic momentum, but Gapminder has simplified the process by only
      comparing the size of cohorts.
    </p>
    <p>
      Future changes in population can be attributed to three factors:
      fertility, mortality, and momentum. To find out how a population will
      change, demographers make up a set of variations. By keeping fertility at
      replacement-level or letting mortality be constant, they can analyze the
      effects of different fertility and mortality scenarios. In that way,
      demographers can compare the outcome with their main scenario, and then
      attribute the difference to the factor they kept constant.
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

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.gapm.io/xpopfut2">
          UN-Pop[7] Andreev, K., V. Kantorová, and J. Bongaarts.
          "Demographic components of future population growth."
          Technical paper no. 2013/3. United Nations DESA Population Division,
          2013.
        </H.A>
      </li>
    </ul>
  </>
)
