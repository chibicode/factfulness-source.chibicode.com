import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The United States spends much more on health care than other capitalist
      countries on Level 4---the European Union, Japan, and South Korea. The
      health spending data comes from WHO's
      <H.A href="http://apps.who.int/nha/database">
        Global Health Expenditure Database
      </H.A>
      , via World Bank[24].
      <H.FB pageNumber={359}>
        アメリカの医療費と、そのほかのレベル4にいる資本主義国の医療費の比較は、経済協力開発機構による報告書“Why
        Is Health Spending in the United States So High?” を参考にした(OECD[1])
      </H.FB>
    </p>
    <p>
      Compared to other OECD countries, the US spends more on all parts of the
      system---hospitals, ambulatory care, pharmaceuticals, and public health
      and administration---which indicate that spending in the US health-care
      system is generally much higher across the board. The component that
      stands out is ambulatory care providers---that is, physicians,
      specialists, dentists, etc. The other most exaggerated costs are public
      health and administration of the US health system, which is 60 percent
      higher than in the rest of the OECD countries.
    </p>
    <p>
      The study continues to ask: Is the US providing too much health care? In
      some common practices, the answer is clearly yes---when comparing the cost
      of regular health delivery in US and France, the US health costs are 50
      percent higher, which is in large part due to unnecessary doctor's
      appointments, along with costly diagnostic equipment and over-testing.
      These frequent doctor consultations and elective health interventions, as
      we see, do not lead to healthier or longer lives on average. In fact, it
      is the opposite. In other countries, that same amount of time with doctors
      is spent on patients with worse conditions and payed through public
      insurance. A few sub-systems are performing well, in terms of patient
      content and cancer rates, as can be seen in the 32 improvements charts,
      where the outcomes have been marvelous for those who got treatment. But
      the US health system do not provide incentives for doctors to spend time
      with the patients most in need of care. See
      <H.A href="http://www.gapm.io/theasp">www.gapm.io/theasp</H.A>.
    </p>
    <p>
      There are two small countries that are excluded from the comparison above.
      The Marshall Islands is reported to have similar health expenditure per
      capita as the US, but we don't mention it because of its incomparable
      size. Maldives is also very small, and it's under the horizontal line, and
      can't be seen in the chart.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.gapm.io/x-ushealth">
          OECD[1] (Organisation for Economic Co-operation and Development).
          &quot;Why is Health Spending in the United States so High?&quot; Chart
          4: Health spending per capita by category of care, US and selected
          OECD countries, 2009. Health at a Glance 2011: OECD Indicators.
        </H.A>
        .
      </li>
      <li>
        <H.A href="http://www.gapm.io/xwb1724">
          World Bank[24] &quot;Health expenditure, total (% of GDP).&quot; World
          Health Organization Global Health Expenditure Database, 2017.
        </H.A>
      </li>
    </ul>
  </>
)
