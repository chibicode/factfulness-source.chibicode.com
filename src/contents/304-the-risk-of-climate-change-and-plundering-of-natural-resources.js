import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      In Energy Transitions, Smil (2010) argues that a transition to non-fossils
      will be very hard to achieve for humans. Smil's argument is difficult to
      accept, but he makes the case that a fast transition away from carbon is
      very unlikely to happen at high speed. The actions of ecosystems are hard
      to predict, but human actions are not. If nothing terrible happens, it is
      easy to imagine how humanity continues to consume resources until it's too
      late. See
      <H.A href="https://www.gapminder.org/topic/nature">
        www.gapminder.org/topic/nature
      </H.A>
      . See <H.A href="http://www.gapm.io/dysna">www.gapm.io/dysna</H.A>.
    </p>
    <p>
      また、
      <H.FB pageNumber={2012}>
        ポール・コリアー著『収奪の星─天然資源と貧困削減の経済学』(2012年、村井章子訳、みすず書房)、
        <H.A href="https://ourworldindata.org/grapher/number-of-parties-env-agreements">
          OurWorldInData[7]
        </H.A>
        、経済学者のエリノア・オストロムの考えも参考にした。
      </H.FB>
      In her work Governing the Commons (1990) Ostrom explores the way in which
      humans across the world have managed to regulate their common resources to
      avoid overexploitation. Read more about
      <H.A href="https://www.en.wikipedia.org/wiki/Elinor_Ostrom">
        Ostrom and her design principles of common pool resource administration
      </H.A>
      .
    </p>
    <p>
      In 『収奪の星』, Collier describes all kinds of natural resources and how
      humans are continuously plundering them, usually to the point that the
      process stops further exploitation, but at that point the breeding ground
      may already have become overused.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="https://www.ourworldindata.org/grapher/number-of-parties-env-agreements">
          OurWorldInData[7] Number of parties in multilateral environmental
          agreements based on UNCTAD United Nations Treaty Collection.
        </H.A>
      </li>
    </ul>
  </>
)
