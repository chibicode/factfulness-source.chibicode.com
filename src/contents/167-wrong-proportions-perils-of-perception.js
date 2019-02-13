import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={363}>
        人々が過大視しやすい物事の例は、33カ国を対象に調査を行ったIspos
        MORI[2,3]によるもの。
      </H.FB>
      The survey is called{' '}
      <H.A href="http://www.gapm.io/xip15">Perils of Perception</H.A>
      (2015) and presents numbers like these highlights from the UK poll: For
      the wealth that the top 1 percent owns, the average guess was 59 percent,
      when the correct figure is 23 percent; on immigration, they guessed that
      25 percent of the population are immigrants, when the the correct figure
      is 13 percent.
    </p>
    <p>
      <H.FB pageNumber={363}>
        ジョン・アレン・パウロス著『
        <H.A href="http://www.gapm.io/xip15">数で考えるアタマになる!</H.A>
        』(2007年、野本陽代訳、草思社)には、数々のおもしろい過大視の例が紹介されている。たとえば、全人類の血液を紅海に流し込むと、海面はどれくらい上昇するか、など。
      </H.FB>
    </p>
  </>
)
