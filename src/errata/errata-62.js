import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>海外</>}
      after={
        <>
          <strong>外国</strong>
        </>
      }
    />
  </p>
)
