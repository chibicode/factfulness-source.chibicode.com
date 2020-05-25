import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>海外移転</>}
      after={
        <>
          <strong>国外</strong>移転
        </>
      }
    />
  </p>
)
