import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g28.png" />
    <p>
      <H.A href="http://gtf.esmap.org/results">
        データはGTF(the Global Tracking Framework)によるもの
      </H.A>
      。これは世界銀行と国際エネルギー機関との合同の取り組みだ。「電気を使える」の基準がどれくらいかは、調査によってさまざまだ。極端な例をあげると、1週間に平均60回停電しても「電気を使える家庭」に分類されることもある。だから、グラフは「いくらかでも電気を使うことができる人」とした。また、
      <H.OtherCardLink
        useTitleAsChildren
        permalink="12-fact-question-12-electricity"
      />
      も参考のこと。
    </p>
    <H.GraphExplanation />
  </>
)
