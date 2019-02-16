import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      This trend from <H.A href="https://gapm.io/dliterae">Gapminder[21]</H.A>{' '}
      for the years 1978--2016, show the latest data from UNESCO[2]. Literacy is
      hard to define and measure. UNESCO[2] collected data from national surveys
      and censuses, all using slightly different definitions and methods for
      measuring literacy. The numbers between 1820 and 1960 are from
      <H.A href="http://gapm.io/x-zanoecd">van Zanden[3]</H.A>, who gathered the
      data from multiple sources, described in the chapter
      <H.A href="https://read.oecd-ilibrary.org/economics/how-was-life_9789264214262-en#page89">
        Education since 1820
      </H.A>
      by Bas van Leeuwen and Jieli van Leeuwen-Li (see p. 94). The exact levels
      are even more uncertain than after 1970. We removed dips and peaks in
      <H.A href="https://read.oecd-ilibrary.org/economics/how-was-life_9789264214262-en#page96">
        the trend line
      </H.A>
      from van Zanden[3] as they might give an impression of non-existing
      accuracy. Visit{' '}
      <H.A href="http://gapm.io/dliterae">Literacy rate---v1</H.A>
      for detailed documentation of the data sources behind this graph.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

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
  </>
)
