import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>レベル4の写真か</>}
      after={
        <>
          レベル4の写真<strong>し</strong>か
        </>
      }
    />
  </p>
)
