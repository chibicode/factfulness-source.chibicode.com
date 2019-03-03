/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      メキシコとアメリカの所得ごとの人口分布(2016年)は、4つの所得レベルを説明したときと同じデータを基に、各国の最新の所得調査をもとにした調整を加えて算出した。
    </p>
    <p>
      所得ごとの人口は世界銀行の
      <H.A href="http://iresearch.worldbank.org/PovcalNet">Povcal[1]</H.A>
      を基にしている。家庭あたりの所得を、購買力の違い(PPP)を考慮し2011年国際ドルに変換した。こうすることで国ごとの所得を正しく比較できる。横軸は対数目盛を利用している。さらに、各国の所得調査のデータ(
      <H.A href="http://www.beta.inegi.org.mx/proyectos/enchogares/regulares/enigh/nc/2016">
        ENIGH
      </H.A>
      と<H.A href="http://www.gapm.io/xuscps17">US-CPS</H.A>
      )に沿うように分布の形に調整を加えている。
    </p>
    <p>
      本書ではどの所得のグラフでも対数目盛を利用している。対数目盛を使用しない場合、グラフは以下のような形になる。
      <H.A href="http://gapm.io/fbincmlinlog">詳しくはこちら</H.A>。
    </p>
    <p>
      <img
        src="/static/images/sources/us-mexico-linear-graph.jpg"
        alt=""
        css={css`
          max-width: 400px;
          margin: 0 auto;
        `}
      />
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.beta.inegi.org.mx/proyectos/enchogares/regulares/enigh/nc/2016">
            ENIGH (Encuesta Nacional de Ingresos y Gastos de los Hogares) 2016.
            Tabulados básicos 2017: Table 2.3.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xuscps17">
            US-CPS (US Census Bureau) Current Population Survey (CPS) 2017:
            Family Income in 2016. Table: FINC0_01.
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
