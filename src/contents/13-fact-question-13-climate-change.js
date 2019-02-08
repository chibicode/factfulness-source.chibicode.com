import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={13} />

    <p>
      <H.FB pageNumber={370}>
        正解はA。「気候の専門家」とは、2014年に気候変動に関する政府間パネルが公表した「第5次評価報告書(AR5)」の著者274人のことを指す(IPCC[1])。
      </H.FB>
    </p>

    <p>
      Here is what they predict about the changes in the climate system, as
      summarized in IPCC[2]:
    </p>
    <p>
      Surface temperature is projected to rise over the 21st century under all
      assessed emission scenarios. It is very likely that heat waves will occur
      more often and last longer, and that extreme precipitation events will
      become more intense and frequent in many regions. The ocean will continue
      to warm and acidify, and global mean sea level to rise.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xipcca">
          IPCC[1] (Intergovernmental Panel on Climate Change) Fifth Assessment
          Report (AR5) Authors and Review Editors. May 2014.
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xipcc">
          IPCC[2] Climate Change 2014---Synthesis Report Summary for
          Policymakers. &quot;SPM 2.2 Projected changes in the climate
          system.&quot; p. 10 2018/8/18閲覧。
        </a>
      </li>
    </ul>
  </>
)
