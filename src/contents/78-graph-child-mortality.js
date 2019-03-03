import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      グラフは10年間の平均の推移を表している(
      <H.A href="http://gapm.io/itfr">Gapminder[6]</H.A>
      )。最後の数字はUN-IGMEが2017年に公開した1990年から2016年の乳幼児死亡率だ。1990年以前の数字は何百もの資料を基にしているが、主に
      <H.A href="http://www.mortality.org/">mortality.org</H.A>とBrian R.
      Mitchell著
      <H.A href="https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/IHS">
        International Historical Statistics
      </H.A>
      を参考にし、グラフがひとつの線になるように調整している。
    </p>
    <ul>
      <li>
        1800--1950. Gapminder's historic estimates were compiled and documented
        by Mattias Lindgren, mainly from the Child Mortality Estimates database;
        see <H.A href="http://www.mortality.org/">www.mortality.org</H.A>. The
        historic estimates of infant mortality rate come from Brian R.
        Mitchell's volume
        <H.A href="https://www.google.se/search?tbm=bks&hl=en&q=International+Historical+Statistics+mitchell">
          International Historical Statistics
        </H.A>
        , which were converted to child mortality through regression. For
        detailed documentation on the data and sources, see Version 7 at the
        bottom of the page at
        <H.A href="http://www.gapm.io/du5mr.">www.gapm.io/du5mr</H.A>.
      </li>
      <li>
        1950--2016. UN-IGME is a data collaboration project between UNICEF, WHO,
        UN Population Division and the World Bank. They released new estimates
        of child mortality for countries and a global estimate on October 17,
        2017, which is available at
        <H.A href="http://www.childmortality.org/">www.childmortality.org</H.A>.
        In this dataset almost all countries have estimates between 1970 and
        2016, while roughly half the countries also reach back to 1950.
      </li>
      <li>
        1950--2017. <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>,
        <H.A href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
          世界人口予測 2017
        </H.A>
        , provides annual data of the child mortality rate for all countries in
        the interpolated demographic indicators.
        <H.A href="https://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/5_Interpolated/WPP2017_INT_F01_ANNUAL_DEMOGRAPHIC_INDICATORS.xlsx">
          The data is available for download.
        </H.A>
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
