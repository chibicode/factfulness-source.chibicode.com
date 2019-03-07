import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>キクウィット</>}
      after={
        <>
          <strong>キクウィト</strong>
        </>
      }
    />
  </p>
)
