import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={362}>
        このデータは国連人口基金と国連人口部のデータベースを基にしている(
        <H.A href="http://www.unfpa.org/sexual-reproductive-health">UNFPA</H.A>
        と<H.A href="https://gapm.io/xcontr">UN-Pop[9]</H.A>)。
      </H.FB>
      国連人口基金 is the part of the United Nations that deals with sexual and
      reproductive health. The data show the unmet need for family planning and
      are based on estimates from the UN data set, World Contraceptive Use 2017.
      The data set provides estimates for all women of reproductive age, 15--49
      years, who are married or in a union. See, for example,
      <H.A href="https://data.worldbank.org/indicator/SP.DYN.CONM.ZS?locations=XN-XT-XD-XM">
        contraceptive prevalence rate
      </H.A>
      for the select countries, along with more details. You can explore the
      data in
      <H.A href="https://www.unfpa.org/sexual-reproductive-health">
        the interactive chart
      </H.A>
      further down the page.
    </p>
    <p>
      While we report the percentages of women who say their needs for
      contraceptives are met, UN publishes the reverse numbers, as rates of
      unmet need for family planning. It is defined as the share of women who
      don't want to become pregnant, or want to postpone pregnancy, but are not
      using any method of contraception. The data set, World Contraceptive Use
      2017, is available here:
      <H.A href="http://www.gapm.io/xcontr">www.gapm.io/xcontr</H.A>.
    </p>
  </>
)
