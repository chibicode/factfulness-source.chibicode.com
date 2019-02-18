import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={366}>
        紀元前 8000 年から現在までの人口のグラフは、経済史学者のマ
        ティアス・リンドグレーンが何百もの資料をもとに作成したデータを利用している
        (Lindgren(2006-2016)。グラフ下部に表記しているのは出典の一部のみ。
      </H.FB>{' '}
      The next billion were added to the world population in 130 years after
      1800:
    </p>
    <p>
      | Year | Estimate | | 1800 | 946,764,816 | | 1812 | 1,000,325,622 | | 1929
      | 2,017,045,912 |
    </p>
    <p>
      UN Population Division prepared historic world population estimates that
      can be found online in the UN publication,
      <H.A href="http://www.un.org/esa/population/publications/sixbillion/sixbillion.htm">
        The World at Six Billion
      </H.A>
      . For estimates beginning in year zero, see Table 1, page 5, available to
      download
      <H.A href="http://www.un.org/esa/population/publications/sixbillion/sixbilpart1.pdf">
        as PDF
      </H.A>
      . Caldwell and Schindlmayr (2002) provides population estimates before
      1950 in
      <H.A href="https://www.jstor.org/stable/3092809">
        Historical Population Estimates: Unraveling the Consensus
      </H.A>
      published in the Population and Development Review (pp. 183--204). For
      more about Gapminder's population data, see
      <H.A href="http://www.gapm.io/spop">www.gapm.io/spop</H.A>.
    </p>
  </>
)
