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
    <H.GraphExplanation />
  </>
)
