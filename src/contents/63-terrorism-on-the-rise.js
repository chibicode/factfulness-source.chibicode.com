import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The data about fatalities from terrorism comes from
      <H.A href="http://www.gapm.io/xgtdb17">GTD</H.A> (2017) and{' '}
      <H.A href="https://gapm.io/elev">Gapminder[3]</H.A>
      for data on terror deaths per income level. In 1999, terrorism worldwide
      reached its lowest annual death toll in two decades, with only 2,200
      killed worldwide. It then began to increase over the next 12 years. By
      2014, terrorism multiplied tenfold to 32,765 deaths, but has slowly begun
      to decline during the past two years. For more on terrorism, see note to
      page 118. For the poll about fear of terrorism, see
      <H.A href="http://gapm.io/xgal17">Gallup[4]</H.A>.
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xgtdb17">
            GTD (Global Terrorism Database) (2017) 2017/12/2閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
