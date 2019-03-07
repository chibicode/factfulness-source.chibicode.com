import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>講読</>}
      after={
        <>
          <strong>購読</strong>
        </>
      }
    />
  </p>
)
