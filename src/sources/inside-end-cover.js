import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      巻末の見返しには地域ごとの人口と所得ごとの暮らしを掲載している。地域ごとの人口は、国連人口部による2017年の世界人口予測(
      <H.A href="https://esa.un.org/unpd/wpp">UN-POP[1]</H.A>
      )の出生率中位予測を基にしている。人口は10億人単位で記号にした(
      <H.A href="http://gapm.io/elev">Gapminder[3]</H.A>
      を参考に)。
    </p>
    <p>
      世帯あたりの所得はひとりあたりのGDP(購買力平価ベース、2011年国際ドル)を基にした(
      <H.A href="http://www.gapm.io/x-icpp">ICP[1]</H.A>
      )。2013年の所得とジニ係数のデータは、
      <H.A href="http://iresearch.worldbank.org/PovcalNet">PovCal</H.A>
      のデータを基に2017年と2040年の数値を予測した。予測の手法は
      <H.A href="http://gapm.io/xpiie17">Hellebrandt and Mauro[1]</H.A>
      による“The Future of Worldwide Income
      Distribution”(2015年4月)を参考にした。2040年の数値には
      <H.A href="http://gapm.io/ximfw">IMF[1]</H.A>の予測を利用した(
      <H.A href="http://gapm.io/incm">Gapminder[8]</H.A>)。
    </p>
    <p>
      所得の対数正規分布はBas van Leeuwenが“World Income Inequality
      1820-2000”で用いた手法を(
      <H.A href="http://www.basvanleeuwen.net/bestanden/WorldIncomeInequality.pdf">
        Zanden[1]
      </H.A>
      )基に算出した。よりPovCalの調査結果に沿うように一部調整している。
    </p>
    <p>
      未来の所得ごとの人口については、
      <H.A href="https://www.gapminder.org/sources/income-mountains">
        こちらに詳しく書いている
      </H.A>
      。
    </p>
    <H.InlineCitation>
      <ul>
        <li>
          <strong>PovcalNet</strong> &ldquo;An Online Analysis Tool for Global
          Poverty Monitoring.&rdquo; Founded by Martin Ravallion, at the World
          Bank. Accessed November 30, 2017.{' '}
          <H.A href="http://iresearch.worldbank.org/PovcalNet">
            http://iresearch.worldbank.org/PovcalNet
          </H.A>
          .
        </li>
        <li>
          <H.A href="http://www.gapm.io/x-icpp">
            ICP[1] (International Comparison Program) "Purchasing Power Parity $
            2011."
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
