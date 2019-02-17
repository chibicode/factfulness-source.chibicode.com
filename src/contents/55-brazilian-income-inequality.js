import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      ブラジル全体の所得のうち、上位10%が占める割合のデータは
      <H.A href="http://www.gapm.io/xwb1716">世界銀行 (World Bank[16])</H.A>
      から来ている。ブラジルの所得の分布のグラフは
      <H.A href="http://iresearch.worldbank.org/PovcalNet">PovcalNet</H.A>
      のデータが基となっており、{' '}
      <H.A href="http://www.gapm.io/xbra17">CETAD</H.A>を参考に微調整している。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xbra17">
            CETAD (Centro de Estudos Tributários e Aduaneiros). "Distribuição da
            Renda por Centis Ano MARÇO 2017." Ministério da Fazenda, Brazil,
            2017.
          </H.A>
        </li>
        <li>
          <H.A href="http://iresearch.worldbank.org/PovcalNet">
            PovcalNet "An Online Analysis Tool for Global Poverty Monitoring."
            Founded by Martin Ravallion, at the World Bank. 2017/11/30閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
