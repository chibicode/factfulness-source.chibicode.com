import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>表1から表5</>}
      after={
        <>
          表1<strong>と</strong>表5
        </>
      }
    />
  </p>
)
