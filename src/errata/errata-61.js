import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>貧困、富</>}
      after={
        <>
          <strong>貧富</strong>
        </>
      }
    />
  </p>
)
