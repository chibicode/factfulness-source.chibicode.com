import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g23.png" />
    <p>
      1978年から2016年の識字率はユネスコ(
      <H.A href="http://www.gapm.io/xuislit">UNESCO[2]</H.A>)
      によるもの。識字率を定義し、正確に測るのは難しい。UNESCO[2]は、それぞれの国で微妙に違う国勢調査のデータをひとつにまとめている。
    </p>
    <p>
      1820年から1960年のデータは
      <H.A href="http://gapm.io/x-zanoecd">van Zanden[3]</H.A>
      によるもの。第5章の“
      <H.A href="https://read.oecd-ilibrary.org/economics/how-was-life_9789264214262-en#page89">
        Education since 1820
      </H.A>
      ”はBas van LeeuwenとJieli van
      Leeuwen-Liによって書かれている。p94に識字率のグラフがあるが、このグラフには浮き沈みが何箇所かある。1970年以前の識字率のデータは正確とは言えないから、グラフの浮き沈みをそのまま記載するとミスリードになると判断し、本書のグラフでは除いている。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/dliterae">
            Gapminder[21] Literacy rate---v1, based on UNESCO[2] and van Zanden.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xuislit">
            UNESCO[2] (United Nations Educational, Scientific and Cultural
            Organization) "Education: Literacy rate."
            2017/7最終更新。2017/11/5閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/x-zanoecd">
            van Zanden[3] van Zanden, Jan Luiten, et al., eds. How Was Life?
            Global Well-Being Since 1820. Paris: OECD Publishing, 2014.
          </H.A>{' '}
          DOI: 10.1787/9789264214262-en
        </li>
      </ul>
    </H.InlineCitation>
    <H.GraphExplanation />
  </>
)
