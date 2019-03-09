import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g12.png" />
    <p>
      核弾頭の数は1980年半ばに最高数を記録したあと、ゆるやかに減っている。
      <H.A href="http://www.gapm.io/xsipri17">
        ストックホルム国際平和研究所(SIPRI)
      </H.A>
      は2017年の核弾頭の数を1万4935発と推定している。
    </p>
    <p>
      さらに詳しい内訳は
      <H.A href="http://www.gapm.io/xnuno">The Nuclear Notebook</H.A>
      に掲載されている。これによると、「2017年半ばには、世界に約1万5000発の核弾頭があり、14カ国の107箇所に配置されている。うち9400発は軍事利用されているが、残りは使われておらず核廃棄される予定だ。4150発は使用可能で、1800発は司令が下され次第すぐにでも使うことができる。アメリカとロシアが圧倒的に多くの核弾頭を保有しており、全世界の核弾頭の93%を占めている。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        グラフでは核兵器の数は最高が「64」、最低が「15」(単位は千発)とされており、「6万4000」「1万5000」とは書かれていない。これは、核兵器の数を恣意的に小さく見せているのではない。ほかのグラフでも、グラフの最高値と最低値に共通する単位で割った数字を表示しているから、核兵器の数もそれと合わせているだけだ。たとえば
        <H.OtherCardLink permalink="80-graph-harvest">
          農作物の収穫のグラフ
        </H.OtherCardLink>
        でも単位は千キロだし、
        <H.OtherCardLink permalink="79-graph-ozone-depletion">
          オゾン層の破壊のグラフ
        </H.OtherCardLink>
        や
        <H.OtherCardLink permalink="79-graph-nuclear-arms">
          石油流出事故のグラフ
        </H.OtherCardLink>
        でも単位は千トンだし、
        <H.OtherCardLink permalink="79-graph-deaths-from-disaster">
          災害による死者数のグラフ
        </H.OtherCardLink>
        も単位は千人だ。ちなみに、西洋では1000ごとに単位が変わる(Thousand,
        Million, Billion)。
      </p>
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
