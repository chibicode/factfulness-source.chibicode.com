import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={6} />

    <p>
      <H.FB pageNumber={371}>
        正解はB。国連人口部の専門家の予測は以下の通り(
        <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[3]</H.A>
        )。これからの人口増加の1%は3700万人の子供(0歳から14歳)の増加によるもの。69%は25億人の大人(15歳から74歳)の増加によるもの。30%は11億人の後期高齢者(75歳以上)の増加によるもの。
      </H.FB>
    </p>
  </>
)
