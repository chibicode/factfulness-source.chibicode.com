import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g28.png" />
    <p>
      Data comes from GTF, the Global Tracking Framework, a collaboration
      between the World Bank and the International Energy Agency. The term
      "access" is defined differently in all their underlying sources. In some
      extreme cases, households may experience an average of 60 power outages
      per week and still be listed as "having access to electricity." The graph,
      accordingly, shows people with "some" access. For the GTF measures of
      electricity access, see
      <H.A href="http://gtf.esmap.org/results">
        http://gtf.esmap.org/results
      </H.A>
      . See also the note to Fact question 12: Electricity.
    </p>
    <H.GraphExplanation />
  </>
)
