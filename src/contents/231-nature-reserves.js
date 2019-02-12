import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={360}>
      自然保護区のデータについては、国連環境計画の
      <H.A href="https://protectedplanet.net/">世界自然保護区データベース</H.A>
      と
      <H.A href="https://www.protectedplanet.net/c/protected-planet-report-2016">
        国際自然保護連合の保護地域データベース
      </H.A>
      を基にした。
    </H.FB>
    The trend for 1900--1911 was aggregated by Gapminder[31] from the historic
    records of WDPA, which keeps track of protected areas following the
    <a href="http://www.gapm.io/xprarde">IUCN Definition 2008</a> and the
    <a href="http://gapm.io/x-protareacat">Protected Area Categories</a>; see
    IUCN[1,2].
    <H.FB pageNumber={360}>
      1911年から1990年までのトレンドについては、Abouchakraらの著したこちらの著書を参考にしている:
      Looking Ahead: The 50 Trends That Matter(2016)。
    </H.FB>
    The trend after 1990 is based on UNEP[6] Protected Planet Report 2016 (fig.
    4.1, p. 30), freely available for download at
    <a href="http://www.gapm.io/xprotp16">www.gapm.io/xprotp16</a>.
  </p>
)
