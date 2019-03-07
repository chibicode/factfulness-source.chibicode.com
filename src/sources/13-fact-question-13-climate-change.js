import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={13} />

    <p>
      <H.FB pageNumber={370}>
        正解はA。「気候の専門家」とは、2014年に気候変動に関する政府間パネルが公表した「第5次評価報告書(AR5)」の著者274人のことを指す(
        <H.A href="http://www.gapm.io/xipcca">IPCC[1]</H.A>)。
      </H.FB>
    </p>

    <p>
      これらの専門家は、地球温暖化について次のように述べている(
      <H.A href="http://www.gapm.io/xipcc">IPCC[2]</H.A>):
    </p>
    <p>
      「考えられるすべての温室効果ガスの排出シナリオにおいて、21世紀に地表の温度は上昇すると思われる。熱波がより頻繁に起き、より長期化することは確実だ。豪雨はより頻繁に起き、降水量も増えるだろう。海水の温度は上がり、また酸性化する。平均海水面も上昇する」
    </p>
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xipcca">
            IPCC[1] (Intergovernmental Panel on Climate Change) Fifth Assessment
            Report (AR5) Authors and Review Editors. May 2014.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xipcc">
            IPCC[2] Climate Change 2014---Synthesis Report Summary for
            Policymakers. "SPM 2.2 Projected changes in the climate system." p.
            10 2018/8/18閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
