import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g32.png" />
    <p>
      Data from <H.A href="http://gapm.io/xwhoim">WHO[1]</H.A> gives the
      immunization coverage of all different common vaccines.{' '}
      <H.A href="https://gapm.io/dsvacc">Gapminder[23]</H.A> has combined these
      to one single indicator: the share of children who has received at least
      one vaccine. This indicates at least some basic form of access to modern
      health service and scientific medicine. Read more in the note to Fact
      question 9: Vaccination.
    </p>
    <H.GraphExplanation />
  </>
)
