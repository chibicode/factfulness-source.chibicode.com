import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>70%に切り捨てた</>}
      after={
        <>
          70<strong>歳</strong>に切り捨てた
        </>
      }
    />
  </p>
)
