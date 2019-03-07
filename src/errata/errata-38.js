import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>Ispos MORI</>}
      after={
        <>
          <strong>Ipsos</strong> MORI
        </>
      }
    />
  </p>
)
