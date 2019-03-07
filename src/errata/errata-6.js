import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>続くていく</>}
      after={
        <>
          続<strong>い</strong>ていく
        </>
      }
    />
  </p>
)
