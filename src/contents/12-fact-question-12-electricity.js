import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={12} />

    <p>
      <H.FB pageNumber={371}>
        正解はC。<H.A href="http://www.gapm.io/xgtf">GTF</H.A>
        によれば、世界の人口の85.3%が、いくらかでも電気を使うことができる。誇張を避けるため80%に切り捨てた。「電気を使える」の基準がどれくらいかは、調査によってさまざまだ。極端な例をあげると、1週間に平均60回停電しても「電気を使える家庭」に分類されることもある。だから、質問は「いくらかでも電気を使うことができる」とした。
      </H.FB>
    </p>

    <p>
      ちなみにGTF(The Global Tracking
      Framework)は世界銀行と国際エネルギー機関との合同の取り組みだ。
    </p>
  </>
)
