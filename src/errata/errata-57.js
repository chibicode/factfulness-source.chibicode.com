import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>警視庁</>}
      after={
        <>
          警<strong>察</strong>庁
        </>
      }
    />
  </p>
)
