import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={10} />

    <p>
      <H.FB pageNumber={371}>
        正解はA。保健指標評価研究所が188カ国を対象に行った調査によれば(
        <H.A href="http://www.healthdata.org/node/3680">IHME[2]</H.A>
        )、世界中の25歳から34歳の女性は平均9.09年の学校教育を受けている。男性は10.21年。また、2010年に146カ国を対象にした別の調査によると、25歳から29歳の女性は平均8.79年の学校教育を受け、男性は9.32年の学校教育を受けている(
        <H.A href="http://www.barrolee.com/">Barro and Lee (2013)</H.A>)。
      </H.FB>
    </p>
    <p>
      これらの調査が100%正しいとは言い切れないが、どれほど誤差があっても、間違った選択肢の「6年」や「3年」にはならないだろう。平均寿命の質問と同じく、わたしたちはまずこの質問を自由回答形式で聞いてみた。そこで出た答えに近かった「6年」と「3年」を正解以外の選択肢にした。
    </p>
  </>
)
