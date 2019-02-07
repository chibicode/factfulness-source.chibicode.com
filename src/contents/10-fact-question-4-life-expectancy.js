import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={4} />

    <H.P>
      <H.FB pageNumber={372}>
        正解はC。保健指標評価研究所によれば、2016年に生まれた人の世界の平均寿命は72.48歳だった(
        <H.A href="http://gapm.io/xihlex">IHME[1]</H.A>
        )。国連の予測はそれより少し低く、71.9歳だった(
        <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[3]</H.A>
        )。誇張を避けるため70%に切り捨てた。
      </H.FB>
    </H.P>

    <p>
      「70歳」のほかに「50歳」と「60歳」を選択肢にした理由を説明しよう。わたしたちはまず、この質問を自由回答形式で聞いてみた。すると、ほとんどの人は解答欄に「50歳」または「60歳」と書き込んだ。これらをそのまま選択肢として採用したわけだ。
      <a href="http://www.gapm.io/q4">詳しくはこちら</a>。
    </p>
  </>
)
