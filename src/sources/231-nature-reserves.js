import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={360}>
        自然保護区のデータについては、国連環境計画の
        <H.A href="https://protectedplanet.net/">
          世界自然保護区データベース
        </H.A>
        と
        <H.A href="https://www.protectedplanet.net/c/protected-planet-report-2016">
          国際自然保護連合の保護地域データベース
        </H.A>
        を基にした。
      </H.FB>
    </p>
    <p>
      1900年から1911年までのデータはWDPAの記録を基にしている(
      <H.A href="https://gapm.io/protnat">Gapminder[31]</H.A>)。WDPAは
      <H.A href="http://www.gapm.io/xprarde">
        IUCN Definition 2008 (IUCN[1])
      </H.A>
      と
      <H.A href="http://gapm.io/x-protareacat">
        Protected Area Categories (IUCN[2])
      </H.A>
      を基に自然保護区のデータをまとめている。
    </p>
    <p>
      <H.FB pageNumber={360}>
        1911年から1990年までのトレンドについては、Abouchakraらの著したこちらの著書を参考にしている:
        Looking Ahead: The 50 Trends That Matter(2016)。
      </H.FB>
      1990年以降のデータは
      <H.A href="http://www.gapm.io/xprotp16">
        UNEP[6]によるProtected Planet Report 2016の図4.1(p30)
      </H.A>
      を参考にした。
    </p>
    <p>
      <H.OtherCardLink
        useTitleAsChildren
        permalink="80-graph-protected-nature"
      />
      も参考のこと。
    </p>
  </>
)
