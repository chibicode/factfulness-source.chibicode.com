import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      グラフは10年間の平均の推移を表している(
      <H.A href="http://gapm.io/itfr">Gapminder[6]</H.A>
      )。最後の数字はUN-IGMEが2017年に公開した1990年から2016年の乳幼児死亡率だ。1990年以前の数字は何百もの資料を基にしているが、主に
      <H.A href="http://www.mortality.org/">Child Mortality Estimates</H.A>
      とBrian R. Mitchell著
      <H.A href="https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/IHS">
        International Historical Statistics
      </H.A>
      を参考にし、グラフがひとつの線になるように調整している。
    </p>
    <ul>
      <li>
        <strong>1800年から1950年:</strong>{' '}
        過去の推定はマティアス・リンドグレーンが
        <H.A href="http://www.mortality.org/">Child Mortality Estimates</H.A>
        をもとにまとめた。また、Brian R. Mitchell著
        <H.A href="https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/IHS">
          International Historical Statistics
        </H.A>
        に載っている「乳児」死亡率のデータを、回帰分析を使って乳幼児死亡率に変換した。分析データは
        <H.A href="http://www.gapm.io/du5mr">
          こちらのページ下部のVersion 7からダウンロードできる
        </H.A>
        。
      </li>
      <li>
        <strong>1950年から2016年:</strong>{' '}
        UN-IGMEはユニセフ、世界保健機関、国連人口部、世界銀行が共同で立ち上げた統計プロジェクトだ。2017年10月17日に、
        <H.A href="http://www.childmortality.org">
          最新の世界の乳幼児死亡率データ
        </H.A>
        が公開された。ほぼ全ての国において1970年からの乳幼児死亡率が掲載されており、半分の国では1950年からのデータが公開されている。
      </li>
      <li>
        また、<H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>,
        <H.A href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
          世界人口予測 2017 (UN-Pop[1])
        </H.A>
        にも、
        <H.A href="https://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/5_Interpolated/WPP2017_INT_F01_ANNUAL_DEMOGRAPHIC_INDICATORS.xlsx">
          世界各国の乳幼児死亡率のデータが掲載されている
        </H.A>
        。
      </li>
    </ul>
    <p>
      Our county estimates are based on these sources, and our global trend for
      child mortality rate is using the UN-IGME data for the period 1970 to
      2016. All other years is a weighted mean of countries data. The proper way
      to calculate the global child mortality, would require estimating the
      total number of child births and child deaths each year. But we don't have
      good estimates of the number of births, so instead we have used a proxy:
      the fertility rate multiplied by population. This method gets us very
      close to the properly calculated UN-IGME numbers. For 1990, UN-IGME has
      93.4, and our weighted average is 96.6. We have linked our weighted
      average for the world, to the UN-IGME series, by using the rate of change
      before 1990, and apply that backwards in time, so the whole series is
      moved down to meet UN-IGME in 1990. See
      <H.A href="http://www.gapm.io/du5mr">www.gapm.io/du5mr</H.A> for detailed
      documentation.
    </p>
  </>
)
