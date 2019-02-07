import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The data on contraceptive use in Catholic-majority countries---60
      percent---come from the ARDA, using data from their
      <a href="http://www.thearda.com/Archive/Files/Codebooks/WRPNATL_CB.asp">
        National Religion Dataset
      </a>
      , aggregate weighted by total population. The global rates for the rest of
      the world come from
      <a href="http://www.un.org/en/development/desa/population/theme/family-planning/cp_model.shtml">
        UN-Pop[9]
      </a>
      , &quot;Model-based estimates and projections: Countries.&quot;
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.thearda.com/Archive/Files/Descriptions/WRDNATL.asp">
          ARDA (Association of Religion Data Archives) World Religion Dataset:
          National Religion Dataset.
        </a>
      </li>
      <li>
        <a href="www.un.org/en/development/desa/population/theme/family-planning/cp_model.shtml">
          UN-Pop[9] World Contraceptive Use 2017. Data: Model-based estimates
          and projections: Countries. Contraceptive Prevalence: Any modern
          method, Percentage of married or in-union women aged 15 to 49 years.
        </a>
      </li>
    </ul>
  </>
)
