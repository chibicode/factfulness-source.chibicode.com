import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={12} />

    <H.P>
      <H.FB pageNumber={371}>
        正解はC。世界の人口の85.3%が、いくらかでも電気を使うことができる(GTF)。誇張を避けるため80%に切り捨てた。「電気を使える」の基準がどれくらいかは、調査によってさまざまだ。極端な例をあげると、1週間に平均60回停電しても「電気を使える家庭」に分類されることもある。だから、質問は「いくらかでも電気を使うことができる」とした。
      </H.FB>
    </H.P>

    <p>
      For the measures of access to electricity. GTF is a collaboration between
      the World Bank and the International Energy Agency; see
      <a href="http://www.gapm.io/xgtf">www.gapm.io/xgtf</a>. See
      <a href="http://www.gapm.io/q12">www.gapm.io/q12</a>.
    </p>
  </>
)
