import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>M-DAT</>}
      after={
        <>
          <strong>E</strong>M-DAT
        </>
      }
    />
  </p>
)
