import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g15.png" />
    <p>
      グラフを見ると、オゾン層破壊物質の使用量が急激に減っていることがわかる。オゾン層は日焼け、白内障、皮膚がんの原因になり、植物や動物にも悪影響を与える紫外線を遮断してくれる。
    </p>
    <p>
      科学者たちがオゾンホールの原因となるガスを突き止めたとき、世界は対応を急いだ。1987年にモントリオール議定書が採択され、すべての国がこのガスを使うことをやめた。以来、人類はオゾン層破壊物質(ODS)をほとんど使用しなくなった。2017年になるとオゾンホールが縮小し始めた(ソース:{' '}
      <H.A href="https://news.mit.edu/2016/signs-healing-antarctic-ozone-layer-0630">
        MIT
      </H.A>
      )。縮小の原因は地球温暖化によるものかもしれない(ソース:{' '}
      <H.A href="https://www.nasa.gov/feature/goddard/2017/warm-air-helped-make-2017-ozone-hole-smallest-since-1988">
        NASA
      </H.A>
      )。
    </p>
    <p>
      グラフは使用量を千トンで表しているが、これは実際に重さを測った結果ではなく、他の物質に比べた悪影響を表した数字だ。データは
      <H.A href="http://gapm.io/xods17">UNEP[4]</H.A>
      によるもの。オゾン層破壊物質に含まれるのはクロロフルオロカーボン、ハロン、四塩化炭素、メチルクロロホルム、ハイドロクロロフルオロカーボン、ハイドロブロモフルオロカーボン、ブロモクロロメタン、臭化メチルなど。
    </p>
    <H.GraphExplanation />
  </>
)
