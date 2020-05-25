import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>大きな紙</>}
      after={
        <>
          大きな<strong>プリント</strong>
        </>
      }
    />
  </p>
)
