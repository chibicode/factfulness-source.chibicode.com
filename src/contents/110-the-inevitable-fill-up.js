import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      This counterintuitive phenomena is what population experts usually refer
      to as the demographic momentum, a term used to describe the delayed
      stopping of population increase. The fill-up effect is almost identical to
      the demographic momentum, but Gapminder has simplified the process by only
      comparing the size of cohorts.
    </p>
    <p>
      Future changes in population can be attributed to three factors:
      fertility, mortality, and momentum. To find out how a population will
      change, demographers make up a set of variations. By keeping fertility at
      replacement-level or letting mortality be constant, they can analyze the
      effects of different fertility and mortality scenarios. In that way,
      demographers can compare the outcome with their main scenario, and then
      attribute the difference to the factor they kept constant.
    </p>
    <p>
      If you find it hard to understand the fill-up in the text and graphs in
      this book, we find it easier to explain with animations or with our own
      hands---see<a href="http://www.gapm.io/vidfu"> www.gapm.io/vidfu</a>. For
      more technical descriptions, see from UN-Pop[6, 7]. See also
      <a href="http://www.gapm.io/efill"> www.gapm.io/efill</a>.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xpopfut2">
          UN-Pop[7] Andreev, K., V. Kantorová, and J. Bongaarts.
          &quot;Demographic components of future population growth.&quot;
          Technical paper no. 2013/3. United Nations DESA Population Division,
          2013.
        </a>
      </li>
    </ul>
  </>
)
