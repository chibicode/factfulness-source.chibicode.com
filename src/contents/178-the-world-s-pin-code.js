import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    These maps show the official UN forecasts, rounded to billions, from the
    <H.A href="https://esa.un.org/unpd/wpp/">
      2017 Revision of 世界人口予測
    </H.A>
    from UN-Pop[1]. The world population was 7.55 billion in 2017 according to
    their estimates. That would usually be rounded to 8 billion, but we show 7
    billion because we are rounding the population region by region. The
    populations of the{' '}
    <H.A href="http://gapm.io/ireg">four Gapminder regions</H.A>
    were estimated based on national data: the Americas, 1.0 billion; Europe,
    0.84 billion; Africa, 1.3 billion; and Asia, 4.4 billion. See also the note
    to Fact Question 8.
  </p>
)
