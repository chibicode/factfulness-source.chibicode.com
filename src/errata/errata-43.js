import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>矢先</>}
      after={
        <>
          <strong>直後</strong>
        </>
      }
    />
  </p>
)
