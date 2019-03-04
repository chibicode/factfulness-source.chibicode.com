import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g26.png" />
    <p>
      This trend is based on
      <H.A href="http://www.gapm.io/xuisoutsf">UNESCO[3]</H.A>, and shows the
      number of girls of official primary school age who are enrolled in primary
      or secondary school, expressed as a percentage of the population of
      official primary school age girls. The age interval for primary education
      varies between countries, but it is often between 6 to 11 years of age.
      Girls of primary school age who are still in pre-primary education are
      excluded and considered out of school.{' '}
      <H.A href="http://www.gapm.io/xoos">UNESCO[4]</H.A>
      expresses the numbers in "out-of-school" children. We have inverted the
      numbers to show children not out-of-school: the in-school rate. See also
      the note to Fact question 1: Girls in school.
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xuisoutsf">
            UNESCO[3] (United Nations Educational, Scientific and Cultural
            Organization) "Education: Out-of-school rate for children of primary
            school age, female." 2017/11/26閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xoos">
            UNESCO[4] "Rate of out-of-school children." 2017/11/29閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
    <H.GraphExplanation />
  </>
)
