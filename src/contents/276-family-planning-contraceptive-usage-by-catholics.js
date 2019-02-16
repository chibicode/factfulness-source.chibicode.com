import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      「カトリック教徒が多数派を占める国における避妊具の使用率が60%」というデータは、ARDAによる
      <H.A href="http://www.thearda.com/Archive/Files/Codebooks/WRPNATL_CB.asp">
        National Religion Dataset
      </H.A>
      を参考にしている。こちらは各国の人口比をもとにデータを調整した。また、世界全体の避妊具の使用率は
      <H.A href="http://www.un.org/en/development/desa/population/theme/family-planning/cp_model.shtml">
        UN-Pop[9]
      </H.A>
      を参考にしている。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.thearda.com/Archive/Files/Descriptions/WRDNATL.asp">
            ARDA (Association of Religion Data Archives) World Religion Dataset:
            National Religion Dataset.
          </H.A>
        </li>
        <li>
          <H.A href="www.un.org/en/development/desa/population/theme/family-planning/cp_model.shtml">
            UN-Pop[9] World Contraceptive Use 2017. Data: Model-based estimates
            and projections: Countries. Contraceptive Prevalence: Any modern
            method, Percentage of married or in-union women aged 15 to 49 years.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
