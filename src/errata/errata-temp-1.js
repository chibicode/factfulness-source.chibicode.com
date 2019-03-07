import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>5年後、ポーランドは中絶を禁止し</>}
        after={
          <>
            <strong>その後</strong>、ポーランドは中絶を禁止し
          </>
        }
      />
    </p>
    <p>
      (ポーランドが中絶を大々的に禁止したのは
      <H.A href="https://en.wikipedia.org/wiki/Abortion_in_Poland">
        共産主義が崩壊した後の1990年だったので
      </H.A>
      )
    </p>
  </>
)
