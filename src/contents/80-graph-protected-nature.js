import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g18.png" />
    <p>
      このグラフには国連環境計画(
      <H.A href="https://protectedplanet.net/">UNEP[5]</H.A>
      )のデータを利用しており、国際自然保護連合(IUCN[1,2])が
      <H.A href="http://www.gapm.io/xprarde">定義</H.A>した
      <H.A href="http://www.gapm.io/x-protareacat">自然保護区</H.A>
      の増減を観測している。
    </p>
    <ul>
      <li>
        1990年以降のデータは<H.A href="http://gapm.io/xprotp16">UNEP[6]</H.A>
        のp30から。
      </li>
      <li>
        1911年から1990年のデータは
        <H.A href="https://books.google.com/books/about/Looking_Ahead.html?id=N542jwEACAAJ">
          Abouchakra et al (2016)
        </H.A>
        によるもので、UNEP[5]の2012年のデータをまとめたもの。
      </li>
      <li>
        1900年から1911年のデータはUNEP[5]のデータをもとに
        <H.A href="http://gapm.io/protnat">
          ギャップマインダーが算出した(Gapminder[31])
        </H.A>
        。
      </li>
    </ul>
    <H.GraphExplanation />
  </>
)
