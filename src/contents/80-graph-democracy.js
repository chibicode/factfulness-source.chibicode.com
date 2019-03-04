import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g24.png" />
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        原著では、ここには「
        <strong>
          民主主義: 世界の全人口のうち、民主主義国に暮らす人の割合
        </strong>
        」が掲載されていた(ソースは
        <H.A href="https://ourworldindata.org/democracy">OurWorldInData[4]</H.A>
        )。
      </p>
      <H.GraphThumbnail src="/static/images/32-graphs/g-democracy.png" />
      <p>
        しかし、
        <H.A href="https://www.gapminder.org/factfulness-book/mistakes/">
          原著の正誤表
        </H.A>
        には、「民主主義の質は過去10年で悪くなっていることから、ここには適さない。代わりにオリンピックの参加国・チーム数を掲載するべき」とあったため、日本語版ではオリンピックのグラフに差し替えた。
      </p>
      <p>本書のp303には、オリンピックについて以下のように書かれている:</p>
      <H.BookQuote pageNumber={303}>
        {_ => (
          <>
            <p>
              人間には暴力で報復したがる愚かな本能がある。なにより邪悪なのは、戦争に訴える本能だ。こうした本能に対抗できるのは、人と人との個人的な関係だ。
            </p>
            <p>
              オリンピックも、国際貿易も、交換留学も、自由なインターネットも、人種や国家の境を越えて人と人が出会う機会だ。そんな機会がたくさんあるといい。個人の関係が、世界平和を維持するためのセーフティネットになる。
            </p>
          </>
        )}
      </H.BookQuote>
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
